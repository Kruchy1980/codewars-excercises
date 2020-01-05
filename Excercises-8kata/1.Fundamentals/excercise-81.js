// Sum Arrays

function sum(numbers) {
    "use strict";
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum
};


// Shorter way

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}