
const Anemo = ['Venti', 'Kazuha', 'Sucrose', 'Lynette']
const Hydro = ['Furina', 'Neuvillette', 'Yelan']
const pyro = ['Arlecchino', 'Chevreuse', 'Mavuika']  
 
// Anemo.push(Hydro)
// console.log(Anemo);
// Array store it as an Array inside an array
// console.log(Anemo[4]);

const swirl = Anemo.concat(Hydro)
console.log(swirl);

// can combine multiple array 
const vapo = [...Hydro, ...pyro]
console.log(vapo);


const myId = [1, 2,[ 3, 4], 5, [6, 7, [8, 9, 7], 8, 4], 3, 6]
console.log(myId.flat(2));

console.log(Array.isArray([2, 3, 4, 5]));
console.log(Array.isArray('Paimon'));
console.log(Array.from('paimon'));




// convert an object into an array 

const obj = {a:1, b:2, c:3, d:4}
const value = Object.values(obj)
console.log(value);

const key = Object.keys(obj)
console.log(key);

const entries = Object.entries(obj)
console.log(entries);


 let score1 = 300;
 let score2 = 400;
 let score3 = 200;

 console.log(Array.of(score1, score2, score3));
 