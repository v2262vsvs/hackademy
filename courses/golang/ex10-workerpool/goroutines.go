package goroutines

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
	"sync"
	"time"
)

func Run(poolSize int) {
	//_, _, err := os.Pipe()
	var wg sync.WaitGroup
	n := 1
	jobs := make(chan float64, poolSize)
	scanner := bufio.NewScanner(os.Stdin)

	for scanner.Scan() {

		actual := scanner.Text()
		timeSl, _ := strconv.ParseFloat(actual, 32)
		//fmt.Println("time for sleep : ", math.Round(timeSl*10)/10)
		jobs <- math.Round(timeSl*10) / 10
		if poolSize-n > -1 {

			go func(n int, jobs <-chan float64, wg *sync.WaitGroup) {
				wg.Add(1)
				fmt.Print("worker:", n, " spawning", "\n")
				for j := range jobs {
					sleep := int(j * 1000000)
					tm := math.Round(j*10) / 10
					if tm == float64(1) {
						fmt.Print("worker:", n, " sleep:", tm, ".0", "\n")
					} else {
						fmt.Print("worker:", n, " sleep:", tm, "\n")
					}
					time.Sleep(time.Microsecond * time.Duration(sleep))
				}
				fmt.Print("worker:", n, " stopping", "\n")
				wg.Done()
			}(n, jobs, &wg)
			n += 1

		}
	}
	close(jobs)
	wg.Wait()

}
