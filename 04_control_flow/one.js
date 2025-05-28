// 

if (true) {
    console.log('executed');  
}

const isLoggedIn = false

if (isLoggedIn == true) {
    console.log(`is logged in`);  

} else{
    console.log(`is  ofline`);
    
}
if ('2' === 2) {
    console.log(`is equal`);
    
} else {
    console.log(`is not equal`);
    
}
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

if (score > 169) {
    const power = 'fly'
    console.log(`user power: ${power}`);  
}

// const balance = 1200

// if (balance < 600) {
//     console.log("less then 500");
    
// } else if (balance < 800) {
//     console.log('less than 800');
    
// } else if (balance < 1000) {
//     console.log("less than 1000");
    
// } else {
//     console.log("less than  1300");
    
// } 


const userLoggedIn = true
const debitCard = false

//  && => both has to be true 
// add multiple


if (userLoggedIn && debitCard) {
    console.log("Allowed to purchase ");
    
} else {
    console.log("You are not eligible to purchase");  
}


const loggedInFromGoogle = false
const loggedInFromEmail = true

//  || or 
//  either one of them has to be true
// check multiple

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log(" User logged in");
    
} else {
    console.log("not logged in");
    
}
