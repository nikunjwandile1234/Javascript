const form = document.querySelector('form');

form.addEventListener('submit', function(item) {
    item.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height <= 0 || isNaN(height))   
    {
        results.innerHTML = `Please enter a valid height ${height}`;
    }

    else if (weight <= 0 || isNaN(weight))  
    {
        results.innerHTML = `Please enter a valid weight ${weight}`;
    }

    else
    {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2); 
        

        if (bmi < 18.6)
        {
            results.innerHTML = `The BMI is Under Weight: ${bmi}`;
        }
        else if (bmi >= 18.6 && bmi <= 24.9)
        {
            results.innerHTML = `The BMI is Normal: ${bmi}`;
        }
        else
        {
            results.innerHTML = `The BMI is Over Weight: ${bmi}`;
        }
    }
});
