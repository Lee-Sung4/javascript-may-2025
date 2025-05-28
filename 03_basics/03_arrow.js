const user = {
    username: 'paimon',
    price: 999,

    welcomeMessage: function() {
            console.log(`${this.username}, welcome to website`);
            
    }
    
}
user.welcomeMessage()

//  arrow function
const newUser = () => {
    let username = 'lee sung'
    console.log(this);
    
}
newUser()

//  basic 
// arrow function

const addTwoNum = (num1, num2) => {
return num1 + num2
}
console.log(addTwoNum(2, 9, 4));


const addThreeNum = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThreeNum(2, 9, 4));

// arrow function for object 
const subTwoNum = (num1, num2) => ({a:'we', b:'Are', c:'Ok'})
console.log(subTwoNum());




// eg loop
const myArray = [2, 5, 6, 8, 9, 3, 1]
myArray.forEach(() => ({})    )
