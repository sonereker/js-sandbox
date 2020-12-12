const first = [1, 2, 3]
const second = [6, 7, 8]

// const combined = first.concat(second)
const combined = [...first, 5, ...second, 9]

console.log(combined)
