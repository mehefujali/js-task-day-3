/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const height = 1.76;
const wait = 58;

const bmiCal = wait / (height * height);

console.log(bmiCal);

if (bmiCal < 18.5) {
    console.log('you ar umderweight');

}
else if (bmiCal >= 18.5 && bmiCal <= 24.9) {
    console.log('You are normal');

}
else if (bmiCal >= 25 && bmiCal <= 29.9) {
    console.log('you are over weight');

}
else {
    console.log('you ar verry mota');

}