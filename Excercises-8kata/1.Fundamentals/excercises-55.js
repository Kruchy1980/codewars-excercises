//Square(n) Sum

// Longer general solution

function squareSum(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += (numbers[i] ** 2);
    }
    return sum;
}

// Shorter with reduce() Methode solution
function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum + (num * num), 0);
}