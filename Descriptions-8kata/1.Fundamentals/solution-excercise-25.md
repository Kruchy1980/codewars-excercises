# Is n divisible by x and y?

Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

### Solution

function isDivisible(n, x, y) {

### Simple ternary function used to solve the problem

    return (n % x == 0 && n % y == 0) ? true : false;

}
