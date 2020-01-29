# Remove duplicates from list

Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

### Solution

function distinct(a) {

##### With the spread operator and new Set(element) it is very easy to solve the problem

    return [...new Set(a)];

}

### More about methodes used in this excercise under url:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax - ...array - spread operaror

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set - new Set() Method
