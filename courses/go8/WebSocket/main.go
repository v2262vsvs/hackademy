package main

import (
	"crypto/md5"
	"flag"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/gorilla/mux"
)

func (uServ *UserService) addAdmin() error {
	CAKE_ADMIN_EMAIL := os.Getenv("CAKE_ADMIN_EMAIL")
	CAKE_ADMIN_PASSWORD := os.Getenv("CAKE_ADMIN_PASSWORD")
	passwordDigest := md5.New().Sum([]byte(CAKE_ADMIN_PASSWORD))
	admin := User{
		Email:          CAKE_ADMIN_EMAIL,
		PasswordDigest: string(passwordDigest),
		FavoriteCake:   "AdminCake",
		Role:           "AdminRole",
		Ban:            false,
	}
	err := uServ.repository.Add(admin.Email, admin)
	if err != nil {
		return err
	}
	return nil
}

var addr = flag.String("addr", ":8080", "http service address")

func main() {
	r := mux.NewRouter()
	users := NewInMemoryUserStorage()
	userService := UserService{repository: users}
	userService.addAdmin()

	os.Setenv("CAKE_ADMIN_EMAIL", "admin@mail.com")
	os.Setenv("CAKE_ADMIN_PASSWORD", "adminadmin")
	flag.Parse()
	hub := newHub()
	go hub.run()

	jwtService, err := NewJWTService("pubkey.rsa", "privkey.rsa")
	if err != nil {
		panic(err)
	}
	//r.HandleFunc("/user/jwt", logRequest(wrapJwt(jwtService, userService.JWT))).Methods(http.MethodPost)
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		serveWs(hub, w, r)
		hub.SendMessages(time.Second * time.Duration(int64(3)))
	})
	r.HandleFunc("/admin/ws", jwtService.jwtWS(&userService, hub))
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		authHeader := r.Header.Get("Authorization")
		token := strings.TrimPrefix(authHeader, "Bearer ")
		if _, err := jwtService.ParseJWT(token); err != nil {
			w.WriteHeader(405)
			w.Write([]byte("unauthorized"))
			return
		}
		serveWs(hub, w, r)
		hub.SendMessages(time.Second * time.Duration(int64(3)))
	})

	errrr := http.ListenAndServe(*addr, nil)
	if errrr != nil {
		log.Fatal("ListenAndServe: ", errrr)
	}
}
