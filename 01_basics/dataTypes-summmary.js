// DataType



/*  # Primitive( call by value)

 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

********* Symbol to be explored****



 Reference (Non primitive)

 : Array, Object, Functions



*******to be explored*****

 */

//***************  JavaScript is a dynamically typed language ***************************



//---------------------Memory management---------------------------

//https://www.geeksforgeeks.org/memory-management-in-javascript/

// Stack (Primitive),       Heap (Non-premitive or Reference)

let myMain  = "Neuvillette";
let mySecondMain = myMain;
mySecondMain = "Arlecchino";

console.log(myMain);
console.log(mySecondMain);
// copy is made and changes only apply on the copy

let mommy = {
    "electro": "Raiden Shogun",
    "pyro": "Mavuika"
}
let secondMommy = mommy;
secondMommy.electro = "Clorinde";


console.log(mommy);
console.log(secondMommy);

// change the orginal one also, as both the variable are taking reference from the same place (heap memory)
// no copy is made here



