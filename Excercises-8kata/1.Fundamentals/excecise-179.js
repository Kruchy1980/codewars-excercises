// Find numbers which are divisible by given number

function divisibleBy(numbers, divisor) {
    return numbers.filter(el => el % divisor === 0);
}