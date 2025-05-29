// Map


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map()
const favNums = myNumbers.map( (num) => {
    return num + 10
})
console.log(favNums);




// forEach 
// we did not store it in a variable because  forEach loop cannot be store in a variable it always return => undefined
myNumbers.forEach( (num) => {
    console.log(num + 10)
})







