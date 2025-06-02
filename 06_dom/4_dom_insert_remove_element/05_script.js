// 
// 
let newEl = document.createElement("div")
newEl.innerText = "I am New Box"
newEl.style.backgroundColor = "aqua"


let container = document.querySelector(".container");



// append => inside ---> end of the node
container.append(newEl, "Append");

// prepend => inside ---> start of the node
// container.prepend(newEl)

// after => outside ---> add after the node
// container.after(newEl)

// before => outside ---> add before the node
// container.before(newEl)


// Delete Element
// container.children[1].remove();
// container.appendChild(newEl)