// Object
// can add array, function, number, string, boolean


// object literals
// => {}

const mySym = Symbol('mykey')

const user = {
    'name': 'lee sung',
    [mySym]: 'mykey',
     age:18,
    location:'seoul',
    email: 'leesung@gmail.com',
    logInDays: ['monday', 'wednesday']

}

console.log(user['email']);

// Symbol**************
console.log(user[mySym]);


// ----------------------
// block the changes by using freeze
// Object.freeze(user)
user.email = 'sungjinwo@gmail.com';

console.log(user['email']);
console.log(user);


user.greating1 =  function(){
    console.log(`hello my friend, ${this.name}`);
    
}

console.log(user.greating1());






