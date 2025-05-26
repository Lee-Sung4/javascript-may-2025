// Array
// Reference or Non-primitive data types 
// => object 

const mycollection = ['lee', 5, 3, 7, 4, 5, 11, 0, true, 'sung']

// Array Methods

console.log(mycollection[8]);
mycollection.push('apple')
// mycollection.pop()
// mycollection.unshift('oreo')
console.log(mycollection);

// console.log(mycollection.includes('apple'));
console.log(mycollection.indexOf('sung'));

// convert it into a string
const newArray = mycollection.join();
console.log(mycollection);
console.log(newArray);     



console.log('A', mycollection);

console.log(mycollection.slice(2, 5));
console.log('B', mycollection);
console.log(mycollection.indexOf(11));



mycollection.splice(2, 2, 'Paimon', 'Lumine');
//          splice(from Index, items to remove, add items..........)
console.log('C', mycollection);
// affect the array

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice


