// number 

const crit = new Number(240);

console.log(crit, typeof crit);
console.log(crit.toString().length);
console.log(crit.toFixed(2));
console.log(crit.toString().replace(40, 69));
// can  also use string property by converting it into string



const currency = 1000000
console.log(currency.toLocaleString('en-in'));



// +++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-22));
console.log(Math.round(6.9));
console.log(Math.min(5, 3, 7, 4, 9, 6));
console.log(Math.max(5, 3, 7, 4, 9, 6));



const uid = Math.random().toFixed(2)
console.log(uid);


const random = (Math.floor((Math.random()*10)+10));

console.log(random);



const min = 20;
const max = 30;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);
