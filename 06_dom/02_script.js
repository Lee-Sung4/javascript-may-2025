// Query Selector

// document.querySelector("#myId/.myClass/tag"); 
// return first element
// only one element

const myClasBox = document.querySelector("#first-box");
console.log(myClasBox);

myClasBox.style.backgroundColor = "purple"

// all the same : for Id => "#"
//                  class =>"."
//                  tag => "h2"




// ******************All**************
// document.queryAllSelector("#myId/.myClass/tag")
// return a node list
// can access using index
const myFavBoxs = document.querySelectorAll(".box") 
console.log(myFavBoxs);

myFavBoxs[4].style.backgroundColor = "grey"