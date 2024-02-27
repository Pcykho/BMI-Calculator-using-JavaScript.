/* BMI Calculator using JavaScript.
Special thanks to Angela Yu @ AppBrewary */

function BMI(weight,height) {
    
    var heightSq = Math.pow (height,2);
    var bmiResult = (weight / heightSq);
    
    if (Math.round (bmiResult) < 18.5 ) {
    return ("Your BMI is " + Math.round (bmiResult) + ", so you are underweight.")
    } if (bmiResult > 24.9 ) {
    return ("Your BMI is " + Math.round (bmiResult) + ", so you are overweight.")
    } else {
    return ("Your BMI is " + Math.round (bmiResult) + ", so you have a normal weight.")
    } 
    
}

// erase and rewrite below code with your weight,height in Kilo Grams & Metres to get the output BMI number.
// eg: BMI (60,1.6);

BMI (weight,height);


// check your console log for the output.
