# Find numbers which are divisible by given number

Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example
divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

### Solution

function divisibleBy(numbers, divisor){

##### Using array.filter() method will solution of this excercise make easy

    return numbers.filter(el => el % divisor === 0);

}

### More about array.filter() method under url:

https://www.w3schools.com/jsref/jsref_filter.asp - array.filter() method
