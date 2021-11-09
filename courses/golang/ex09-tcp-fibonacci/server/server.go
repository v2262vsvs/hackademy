package main

import (
	"encoding/json"
	"fmt"
	"math/big"
	"net"
	"time"
)

type Params struct {
	Num       int64
	TI        time.Duration
	FI        *big.Int
	Memorized bool
}
type Send struct {
	Number int64
}

func fibonacci(n *big.Int) *big.Int {

	f2 := big.NewInt(0)
	f1 := big.NewInt(1)

	if n.Cmp(big.NewInt(1)) == 0 {
		return f2
	}

	if n.Cmp(big.NewInt(2)) == 0 {
		return f1
	}

	for i := 3; n.Cmp(big.NewInt(int64(i))) >= 0; i++ {
		next := big.NewInt(0)
		next.Add(f2, f1)
		f2 = f1
		f1 = next
	}

	return f1
}

func main() {
	fmt.Println("Launching server...")

	ln, _ := net.Listen("tcp", ":8081")
	conn, _ := ln.Accept()
	cach := make(map[int64]*big.Int)
	for {
		decoder := json.NewDecoder(conn)
		var ans Send
		decoder.Decode(&ans.Number)
		fmt.Print("Message Received:", ans.Number)
		fmt.Print("\n")

		ch, is := cach[ans.Number]
		newBigInt := big.NewInt(ans.Number)
		a := fibonacci(newBigInt)
		if is {
			params := Params{
				Num:       ans.Number,
				FI:        ch,
				TI:        time.Since(time.Now()),
				Memorized: true,
			}
			encoder := json.NewEncoder(conn)
			encoder.Encode(params)

		} else {
			TimeReq := time.Now()
			//fmt.Print("here\n", a)
			params := Params{
				Num:       ans.Number,
				FI:        a,
				TI:        time.Since(TimeReq),
				Memorized: false,
			}
			cach[ans.Number] = a
			encoder := json.NewEncoder(conn)
			encoder.Encode(params)

		}

	}
}
