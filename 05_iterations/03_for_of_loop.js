// for of 

// const car = ['Porsche', 'Mercedes', 'BMW', 'Ferrari']

// for (const num of car) {
//     console.log(num);
    
// }

// const greatings = 'Hello World!'

// for (const greet of greatings) {
//     if (greet == " ") {
//         // console.log('space detected');
//         continue
//     }
//     console.log(greet);
    
// }


// for of loop
// Array specific loop

const data = [
  { name: "Alice", age: 25, job: "Developer" },
  { name: "Bob", age: 30, job: "Designer" },
  { name: "Charlie", age: 28, job: "Product Manager" },
  { name: "Diana", age: 22, job: "Intern" }
];

// for loop an Array 
for (let index = 0; index < data.length; index++) {
    console.log(data[index].name);
    
    
}

// for of loop an Array
for (const item of data){
    console.log(item.age);
    
}

// forEach loop an Array
data.forEach((item) => {
    console.log(item.job)
});





// Maps
// Key order maintained

const myMap = new Map();

// Add key-value pairs
myMap.set('name', 'Paimon the mascot');
myMap.set(42, 'The answer');
myMap.set(true, 'Boolean key');

// console.log(myMap.get('name'));
// console.log(myMap.get(42));
// console.log(myMap.get(true));

// has only check the key not the value
// console.log(myMap.has('name'));
// console.log(myMap.size);


// print an array

// for (const item of myMap) {
//     console.log(item);
    
// }

for (const [key, value] of myMap) {
    console.log(key, ":-", value);
    
}