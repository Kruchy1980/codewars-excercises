# Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples
basicOp('+', 4, 7) // Output: 11
basicOp('-', 15, 18) // Output: -3
basicOp('\*', 5, 5) // Output: 25
basicOp('/', 49, 7) // Output: 7

### Solution

function basicOp(operation, value1, value2)
{

##### Simple ternary function used in here

    return operation === '+' ? value1 + value2
    : operation === '-' ? value1 - value2
    : operation === '*' ? value1 * value2
    : value1 / value2;

}

### Shorter solution

##### Shorter way is to use eval() function which evaluates or executes an argument or stattement if the argument is in one or more JS statements

function basicOp(operation, value1, value2) {
return eval(value1+operation+value2);
}

### More about eval() function under link:

https://www.w3schools.com/jsref/jsref_eval.asp
