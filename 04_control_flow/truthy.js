

const userEmail = "paimon@gmail.com"

if (userEmail) {
    console.log('got user email');

} else {
    console.log(`Don't have user email`);
}


// *******falsy values***********

// false,
//  0, -0, BigInt 0n, null, undefined, NaN, ""



//  ******truthy values************
// "0", 
// 'false',
//  "  ", 
// [],
// {}, 
// function(){}


// checking empty Array 
const myArray = []

if (myArray.length === 0) {
    console.log("Array is empty");
    
}


const emptyObj = {}
// convert it into an array and then used an array property =>  .length
if (Object.keys(emptyObj.length === 0)) {
    console.log("Object is empty"); 
}




// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 16 ?? 21

console.log(val1);


// Terniart Operator

// condition ? true : false

const iceCream = 1000

iceCream <= 80 ? console.log('less than 80') : console.log('more than 80');



