package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"math/big"
	"net"
	"os"
	"strconv"
	"time"
)

type Send struct {
	Number int64
}
type Params struct {
	Num       int64
	TI        time.Duration
	FI        *big.Int
	Memorized bool
}

func main() {

	conn, _ := net.Dial("tcp", "127.0.0.1:8081")
	defer conn.Close()
	reader := bufio.NewScanner(os.Stdin)
	for {
		decoder := json.NewDecoder(conn)

		//reader := bufio.NewScanner(os.Stdin)
		fmt.Print("Text to send: ")
		reader.Scan()
		text := reader.Text()
		numbered, _ := strconv.ParseInt(text, 10, 64)
		//numbered, _ := strconv.Atoi(text)

		req := Send{Number: numbered}
		encoder := json.NewEncoder(conn)
		encoder.Encode(req.Number)
		var v Params

		decoder.Decode(&v)

		fmt.Printf("%s , %d\n Data from cach: %t\n", v.TI, v.FI, v.Memorized)
	}
}
