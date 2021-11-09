package main

import (
	"errors"
	"net/http"
	"strings"
	"sync"

	"github.com/openware/rango/pkg/auth"
)

type JWTService struct {
	keys *auth.KeyStore
}
type JWTParams struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}

type User struct {
	Email          string
	PasswordDigest string
	FavoriteCake   string
	Role           string

	Ban bool
}
type UserRepository interface {
	Add(string, User) error
	Get(string) (User, error)
}

func wrapJwt(
	jwt *JWTService,
	f func(http.ResponseWriter, *http.Request, *JWTService),
) http.HandlerFunc {
	return func(rw http.ResponseWriter, r *http.Request) {
		f(rw, r, jwt)
	}
}

type InMemoryUserStorage struct {
	lock    sync.RWMutex
	storage map[string]User
}

func NewInMemoryUserStorage() *InMemoryUserStorage {
	return &InMemoryUserStorage{
		lock:    sync.RWMutex{},
		storage: make(map[string]User),
	}
}

func NewJWTService(privKeyPath, pubKeyPath string) (*JWTService, error) {
	keys, err := auth.LoadOrGenerateKeys(privKeyPath, pubKeyPath)
	if err != nil {
		return nil, err
	}

	return &JWTService{keys: keys}, nil
}
func (j *JWTService) ParseJWT(jwt string) (auth.Auth, error) {
	return auth.ParseAndValidate(jwt, j.keys.PublicKey)
}
func (repo *InMemoryUserStorage) Update(login string, userN User) error {
	repo.lock.Lock()
	defer repo.lock.Unlock()

	_, ok := repo.storage[login]
	if !ok {
		return errors.New(" there is no such user to update ")
	}
	repo.storage[login] = userN

	return nil
}
func (repo *InMemoryUserStorage) Get(login string) (User, error) {
	repo.lock.Lock()
	defer repo.lock.Unlock()
	getUser, ok := repo.storage[login]
	if !ok {
		return getUser, errors.New("invalid login params")
	}
	return getUser, nil
}
func (repo *InMemoryUserStorage) Add(login string, userNew User) error {
	repo.lock.Lock()
	defer repo.lock.Unlock()

	_, ok := repo.storage[login]
	if ok {
		return errors.New("user with same login already exists")
	}

	repo.storage[login] = userNew

	return nil
}

type UserService struct {
	ChanMessage chan []byte
	repository  UserRepository
}

func (j *JWTService) jwtWS(service *UserService, hub *Hub) http.HandlerFunc {
	return func(rw http.ResponseWriter, r *http.Request) {
		authHeader := r.Header.Get("Authorization")
		token := strings.TrimPrefix(authHeader, "Bearer ")
		auth, err := j.ParseJWT(token)
		if err != nil {
			rw.WriteHeader(401)
			rw.Write([]byte("unauthorized"))
			return
		}
		user, err := service.repository.Get(auth.Email)
		if err != nil {
			rw.WriteHeader(401)
			rw.Write([]byte("unauthorized"))
			return
		}

		if user.Role == "user" {
			rw.WriteHeader(401)
			rw.Write([]byte("you are not allowed to ban other users"))
			return
		}
		serveWs(hub, rw, r)
	}
}
