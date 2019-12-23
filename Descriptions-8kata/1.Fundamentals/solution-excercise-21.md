# Calculate BMI

Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

### Solution 1

##### Both of thoe conditional functions are making the same thing it means that they are checking separate condition and retutrning answer

function bmi(weight, height) {
if (weight / height ** 2 <= 18.5) {
return 'Underweight';
} else if (weight / height ** 2 <= 25.0) {
return 'Normal';
} else if (weight / height \*\* 2 <= 30.0) { return 'Overweight'}
else return 'Obese';
}

### Solution 2 - ternary function

function bmi(weight, height) {
return (weight / height ** 2 <= 18.5) ? 'Underweight': (weight / height ** 2 <= 25.0) ? 'Normal' : (weight / height \*\* 2 <= 30.0) ? 'Overweight' : 'Obese';
}
