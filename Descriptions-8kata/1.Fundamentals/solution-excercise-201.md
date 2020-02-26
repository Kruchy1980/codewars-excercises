# For Twins: 1. Types

##### Prolog:

This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

##### Task:

Write function typeValidation that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

##### Examples:

typeValidation(42, "number"); // => true
typeValidation("42", "number"); // => false

## Solution

function typeValidation(variable, type) {
// Your code should be here ;)

##### It is easy if we use typeof value operator

    return typeof variable === type;

}

### More about typeof operqator under url:

https://www.w3schools.com/jsref/jsref_operators.asp - operators in JavaScript
