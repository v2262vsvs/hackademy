package stack

import "testing"

//import "fmt"

//type Stack []string
type Stack struct {
	thing []int
}

func New() *Stack {
	newStack := Stack{}
	return &newStack
}

func (s *Stack) IsEmpty() bool {

	return len(s.thing) == 0
}

func (s *Stack) Push(thing int) {

	s.thing = append(s.thing, thing)
}

func (s *Stack) Pop() int {
	if s.IsEmpty() {
		return 0
	} else {
		index := len(s.thing) - 1
		element := (s.thing)[index]
		s.thing = (s.thing)[:index]
		return element
	}
}

func TestStack(t *testing.T) {
	var stack *Stack = New()

	stack.Push(1)
	stack.Push(2)
	stack.Push(3)
	stack.Push(4)
	stack.Push(5)

	for i := 5; i > 0; i-- {
		item := stack.Pop()

		if item != i {
			t.Error("TestStack failed...", i)
		}
	}

	stack.Push(11)
	stack.Push(12)
	stack.Push(13)
	stack.Push(14)
	stack.Push(15)

	for i := 15; i > 10; i-- {
		item := stack.Pop()

		if item != i {
			t.Error("TestStack failed...", i)
		}
	}
}
