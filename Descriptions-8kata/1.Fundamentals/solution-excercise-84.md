# Count by X

Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples:

countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

### Solution

function countBy(x, n) {

##### Teh empty array is declared so let's use it

    var z = [];

##### Start the for loop which takes argument 1 as the begining of array and n as it's length

    for (let i = 1; i <= n; i++) {

##### Than push result which is x times i to array as a separate element

    z.push(x\*i)
    }

##### finally return new array z

    return z;

}
