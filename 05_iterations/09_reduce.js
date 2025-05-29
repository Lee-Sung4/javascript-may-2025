// reduce

const array = [1, 2, 3, 4]
// const initial = 0

// const total = array.reduce( function (acc, current) {
//     console.log(`acc value: ${acc} and current: ${current}`);
//     return acc + current
// }, initial  )


// arrow function 

const myTotal = array.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "cpp course",
        price: 3999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// #1
// boXth same 

// const myCartTotal = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

// #2
const myCartTotal = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

console.log(myCartTotal);
