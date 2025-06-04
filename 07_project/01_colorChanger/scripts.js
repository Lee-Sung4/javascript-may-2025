// 
const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(item) {
    console.log(item);
    item.addEventListener('click', function(ez){
        console.log(ez);
        console.log(ez.target);
        // if (ez.target.id === "yellow") {
        //     body.style.backgroundColor = ez.target.id;
        // }
        // if (ez.target.id === "blue") {
        //     body.style.backgroundColor = ez.target.id;
        // }
        // if (ez.target.id === "grey") {
        //     body.style.backgroundColor = ez.target.id;
        // }
        // if (ez.target.id === "blueviolet") {
        //     body.style.backgroundColor = ez.target.id;
        // }



        // using switch

        switch (ez.target.id) {
            case "yellow":
                body.style.backgroundColor = ez.target.id
                break;
            case "blue":
                body.style.backgroundColor = ez.target.id
                break;
            case "grey":
                body.style.backgroundColor = ez.target.id
                break;
            case "blueviolet":
                body.style.backgroundColor = ez.target.id
                break;
        
            default:
                break;
        }
    })
})