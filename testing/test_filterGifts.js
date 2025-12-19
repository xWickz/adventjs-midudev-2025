import { filterGifts } from "../easy/01-filter-gifts/main.js";

const arraysEqual = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i])

const tests = [
    { // #1
        gifts: [
            'car', 'doll#arm', 'ball', '#train'
        ],
        expected: ['car', 'ball']
    },
    { // #2
        gifts: [
            '#broken', '#rusty'
        ],
        expected: []
    },
    { // 3
        gifts: [

        ],
        expected: []
    }
]

console.log(tests.map((t, i) => ({
    test: i+1,
    result: filterGifts(t.gifts),
    expected: t.expected,
    pass: arraysEqual(filterGifts(t.gifts), t.expected)
})));