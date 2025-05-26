// Date

const myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


let myNewDate22 = new Date(2025, 2, 26 )
// let myNewDate = new Date(2025, 2, 26, 14, 30 )
// month start from 0

let myNewDate = new Date("03-26-2003")

console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
console.log(myNewDate.getTime());
console.log(myNewDate22.getTime());

// console.log(Math.floor(Date.now()/1000));
console.log(myDate.getFullYear());

console.log(`Today's date is ${myDate.getDate()}`);

// myDate.toLocaleString('default',{
//     weekday: 'long'

// })

