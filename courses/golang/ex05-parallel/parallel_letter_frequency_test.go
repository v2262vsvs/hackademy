package letter

import (
	"reflect"
	"testing"
)

type FreqMap map[rune]int

func Frequency(s string) FreqMap {

	m := FreqMap{}

	for _, r := range s {
		m[r]++
	}
	return m
}

func ConcurrentFrequency(strings []string) FreqMap {

	sum := FreqMap{}
	results := make(chan FreqMap, 3)

	for _, s := range strings {
		go func(s string) {
			results <- Frequency(s)
		}(s)
	}

	for r, freq := range <-results {
		sum[r] += freq
	}
	for r, freq := range <-results {
		sum[r] += freq
	}
	for r, freq := range <-results {
		sum[r] += freq
	}
	return sum
}

func TestConcurrentFrequency(t *testing.T) {
	seq := Frequency(euro + dutch + us)
	con := ConcurrentFrequency([]string{euro, dutch, us})
	if !reflect.DeepEqual(con, seq) {
		t.Fatal("ConcurrentFrequency wrong result")
	}
}

var (
	euro = `Freude schöner Götterfunken
Tochter aus Elysium,
Wir betreten feuertrunken,
Himmlische, dein Heiligtum!
Deine Zauber binden wieder
Was die Mode streng geteilt;
Alle Menschen werden Brüder,
Wo dein sanfter Flügel weilt.`
	dutch = `Wilhelmus van Nassouwe
ben ik, van Duitsen bloed,
den vaderland getrouwe
blijf ik tot in den dood.
Een Prinse van Oranje
ben ik, vrij, onverveerd,
den Koning van Hispanje
heb ik altijd geëerd.`
	us = `O say can you see by the dawn's early light,
What so proudly we hailed at the twilight's last gleaming,
Whose broad stripes and bright stars through the perilous fight,
O'er the ramparts we watched, were so gallantly streaming?
And the rockets' red glare, the bombs bursting in air,
Gave proof through the night that our flag was still there;
O say does that star-spangled banner yet wave,
O'er the land of the free and the home of the brave?`
)

func BenchmarkSequentialFrequency(b *testing.B) {
	for i := 0; i < b.N; i++ {
		Frequency(euro + dutch + us)
	}
}

func BenchmarkConcurrentFrequency(b *testing.B) {
	for i := 0; i < b.N; i++ {
		ConcurrentFrequency([]string{euro, dutch, us})
	}
}
