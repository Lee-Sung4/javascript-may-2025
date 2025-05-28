// global Scope
let score1 = 23;
const value1 = 266;

if (true) {
    let score1 = 100;
    const value2 = 300;
    // local scope
    // only present inside
    console.log(`inside: ${score1}`);  
}


console.log(score1);
// console.log(value2);


// the variables inside,  stays inside
function one() {
    const character = 'paimon'
    function two() {
        const website = 'youtube'
        console.log(character);
        function three() {
            console.log(website)
        }
        three()
    }
// console.log(website); cannot access 
two()

}
one()


// the variables in local scope,  stays in that scope
if (true) {
    const character = 'paimon'
    if (character==='paimon') {
        const website = 'youtube'
        console.log(character  + website);
        
    }
    // console.log(website); cannot access
}
// console.log(character); cannot access




// ************************interesting***********************************

// wow nice
// 1# function declaration
console.log(addOne(2));

function addOne(num) {  
    return num + 1
}
// console.log(addOne(2)); no error, you can declaration before or after the function no NP

// 2# function declaration
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(2));
// you can't declare the value before the function
