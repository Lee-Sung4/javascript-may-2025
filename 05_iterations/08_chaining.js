// chaining

const dNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]


const bestNumber = dNumbers
.map( (num) => num * 10)
.map( (num) => num - 10)
.map( (num) => num + 1)
.filter( (num) => num > 40 && num < 70)

console.log(bestNumber);
