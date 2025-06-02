// 
// let h2 = document.getElementsByTagName("h2")

// h2[0].innerText = h2[0].innerText + " from 2025" ;

// using Query
// let h2 = document.querySelector("h2")
// h2.innerText = h2.innerText + " from 2026"



let divs = document.querySelectorAll(".box")


// mentos zindagi
let index = 1;
for (const div of divs) {
    div.innerText = `BOX ${index}`
    index++;
    
}

// amm zindagi

// divs[0].innerText = "BOX 1"
// divs[1].innerText = "BOX 2"
// divs[2].innerText = "BOX 3"



// ********Attribute***********
let btn = document.querySelector("#btn")

//  #1 get
// let id = btn.getAttribute("id")
// console.log(id);

// #2 set
//         attribute ,  value
btn.setAttribute("id", "newId")


btn.style.backgroundColor = "purple"
btn.style.borderRadius = "4px "
btn.style.border = "2px solid black"
btn.style.color = "white"
btn.style.fontSize = "20px"
btn.style.padding = "2px 50px"
btn.innerText = "Button"


// make sure to check 
// classList for adding multiple class on an element
// example in practice_dom.html file

