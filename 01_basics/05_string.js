const myName = new String("Lee Sung");
const firstName = "Lee";
const lastNamem = " Sung";
const profession =  "data scientist";

console.log(`My name is ${firstName + lastNamem}, and I'm a ${profession.toUpperCase()}`);
console.log(myName.charAt(4));
console.log(myName.indexOf('g'));

const newString = myName.substring(1,6)
console.log(newString);

const anotherString = myName.slice(-6, 5)
// if you give negative number it will count reverse
console.log(anotherString);

const oldString = "   Lee   ";
console.log(oldString);
console.log(oldString.trim());



const link = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects444String"

console.log(link.replace('444', '/'));
console.log(link.includes('@'));

// turn it into an array 
console.log(myName.split(" "))
