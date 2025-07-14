
//BMI CALCULATOR PROGRAM

const height = document.getElementById("height");
const weight = document.getElementById("weight");
const calculateBmi = document.getElementById("calculate-bmi");
const value = document.getElementById("bmi-value");

const result = document.getElementById("bmi-result");
console.log(result)

calculateBmi.addEventListener("click", function () {
  
    const heightValue = parseFloat(height.value);
    const weightValue = parseFloat(weight.value);

    const BMI = (weightValue / (heightValue ** 2)).toFixed(2);
    console.log(BMI);

    value.textContent = `Your BMI is ${BMI}`;

    if(BMI < 18.5){
        result.textContent = "Underweight";
    }
    else if(BMI < 25){
        result.textContent = "Normalweight";
    }
    else if(BMI < 30){
        result.textContent = "Overweight";
    }
    else if(BMI < 35){
        result.textContent = "Obesity Class I";
    }
    else if(BMI < 40){
        result.textContent = "Obesity Class II";
    }
    else{
        result.textContent = "Obesity Class II";
    }
});
