// Immediately Invoked Function Expression (IIFE)

// why use IIFE
// to create a private scope for code, preventing variables and functions from polluting the global namespace
//  ( )



// name IIFE
(function Aries(){
    console.log('Logged in');
    
})();


// 
( (name) => console.log(`${name} logged in`))('Lee Sung');
