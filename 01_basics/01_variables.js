console.log("variable");

// var => global scope
// not recommended using
var score = 22;
console.log(score);


// let => block- scope
//Mutable

let color = "pink";
color = "purple"
{
    let paint = "asian paint"
    console.log(paint);
    
}
// console.log(paint);
// the variable only exist inside that block and doesnot exit outside of it so it will show error



// but as for ----- console.log(color)-----this is declared in global 
console.log(color)


const searchId = 23124;
// it is immutable( the value cannot be change)