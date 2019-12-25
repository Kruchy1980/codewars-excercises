// Calculate BMI

// Solution 1
function bmi(weight, height) {
    if (weight / height ** 2 <= 18.5) {
        return 'Underweight';
    } else if (weight / height ** 2 <= 25.0) {
        return 'Normal';
    } else if (weight / height ** 2 <= 30.0) { return 'Overweight' }
    else return 'Obese';
}

// Solution 2

function bmi(weight, height) {
    return (weight / height ** 2 <= 18.5) ? 'Underweight' : (weight / height ** 2 <= 25.0) ? 'Normal' : (weight / height ** 2 <= 30.0) ? 'Overweight' : 'Obese';
}