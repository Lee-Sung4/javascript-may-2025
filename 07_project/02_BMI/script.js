// 


const form = document.querySelector("form")

form.addEventListener('submit', function(ez){
    ez.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const health = document.querySelector('#your-health')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please  give a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please  give a valid weight ${weight}`;
    } else {
        const bmi = (weight/((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span> ${bmi} </span>`;
        if (bmi > 0  && bmi <= 18.6) {
            health.innerHTML = `<span>You are Under Weight </span>`;
        } else if (bmi > 18.6 && bmi <= 24.9) {
            health.innerHTML = `<span>You are Healthy </span>`;
        } else {
            health.innerHTML = `<span>You are overweight </span>`
        }
    }
})