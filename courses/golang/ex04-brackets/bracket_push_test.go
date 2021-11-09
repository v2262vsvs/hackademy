package brackets

import (
	"testing"
)

func Bracket(input string) (asnwer bool, err error) {

	err = nil

	braces := map[rune]rune{}

	braces['{'] = '}'
	braces['['] = ']'
	braces['('] = ')'

	mod2 := make([]string, 0)
	for _, b := range input {
		closed, ok := braces[b]
		if ok {
			mod2 = append(mod2, string(closed))
		} else {
			length := len(mod2)
			if length > 0 && mod2[length-1] == string(b) {
				mod2 = mod2[:len(mod2)-1]
			} else {
				answer := false
				return answer, err
			}
		}
	}
	if len(mod2) != 0 {
		answer := false
		return answer, err
	} else {
		answer := true
		return answer, err
	}

}

var testCases = []struct {
	input    string
	expected bool
}{
	{
		input:    "",
		expected: true,
	},
	{
		input:    "{}",
		expected: true,
	},
	{
		input:    "{{",
		expected: false,
	},
	{
		input:    "}{",
		expected: false,
	},
	{
		input:    "{}[]",
		expected: true,
	},
	{
		input:    "{[]}",
		expected: true,
	},
	{
		input:    "{[}]",
		expected: false,
	},
	{
		input:    "{[)][]}",
		expected: false,
	},
	{
		input:    "{[]([()])}",
		expected: true,
	},
}

func TestBracket(t *testing.T) {
	for _, tt := range testCases {
		actual, err := Bracket(tt.input)
		// We don't expect errors for any of the test cases
		if err != nil {
			t.Fatalf("Bracket(%q) returned error %q.  Error not expected.", tt.input, err)
		}
		if actual != tt.expected {
			t.Fatalf("Bracket(%q) was expected to return %v but returned %v.",
				tt.input, tt.expected, actual)
		}
	}
}

func BenchmarkBracket(b *testing.B) {
	b.StopTimer()
	for _, tt := range testCases {
		b.StartTimer()
		for i := 0; i < b.N; i++ {
			Bracket(tt.input)
		}
		b.StopTimer()
	}
}
