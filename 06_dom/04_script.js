// ****************parent and Childern*********************




const parent = document.querySelector(".week")
console.log(parent.children);

for (let index = 0; index < parent.children.length; index++) {
    const element = parent.children[index].innerHTML;
    console.log(element);
}


// this give node list 
const week = document.querySelectorAll(".day")
console.log(week);
// console.log(week[3].innerHTML);


// looping a node list 

week.forEach((day) => {
    console.log(day.innerHTML);
})







