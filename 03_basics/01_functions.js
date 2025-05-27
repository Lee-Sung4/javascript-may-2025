function myName() {
  console.log("L");
  console.log("E");
  console.log("E");
  console.log("S");
  console.log("U");
  console.log("N");
  console.log("G");
}
myName()

function add(number1, number2) {
  // let result = x + y;
  // return result;
  return number1 + number2;
  
}

function sub(number1, number2) {
    return number1 - number2;
  
}
function multiplication(number1, number2) {
   let multResult = number1 * number2;
   return multResult;
}
function divison(number1, number2) {
     return number1 / number2;
    //  result is last
     
  
}
const result = divison(9, 7)
// let answer = sum(5,9);
console.log(add(9, 7));
console.log(sub(9, 7));
console.log(multiplication(9, 7));
console.log(result);


function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  else{
    return false;
  }
  // return number % 2 === 0? true: false
}

console.log(isEven(1234));



function loginUserMessage(username) {
  // if (username===undefined) {
  //   console.log('please  enter your username');
  //   return
  // }
  if (!username) {
    console.log('please  enter your username');
    return
    
  }
  return `${username} just logged in`;

  
}
// console.log(loginUserMessage('lee-sung4'));
console.log(loginUserMessage());

// ... => rest operator
//  also ...=> spread
//  depending upon usage
function calculateCartPrice(val1, val2, ...num1) {
  return num1;
  
}

console.log(calculateCartPrice(200, 3000, 499, 330));


const user = {
  username:'lee-sung4',
  age: 22
}


function handelObject(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
     
}
// handelObject(user) 
handelObject({
  username:"Paimon",
  age: 5000
})

const myNewArray = [2, 55, 77, 88, 11]
const myOldArray = [2, 95, 69, 71, 18, 91]


function hendelArray(getArray) {
  return getArray[2]
  
}

console.log(hendelArray(myNewArray));
console.log(hendelArray(myOldArray));
console.log(hendelArray([300, 200, 100, 0]));