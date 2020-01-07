# Sum Arrays

Sum Array
Write a method sum (sum_array in python, sumarray in julia, SumArray in C#) that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

Examples
numbers = [1, 5.2, 4, 0, -1]
puts sum(numbers)
9.2
Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.

### Solution

function sum (numbers) {

##### Here is enough to use for loop and add every element of array to each other

    "use strict";
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    }
    return sum

};

### Shorter way - is to use reduce() function to add elements of array to each other

function sum(numbers) {

##### Like here

    return numbers.reduce((a, b) => a + b, 0);

}

### More about reduce under url:

https://www.w3schools.com/jsref/jsref_reduce.asp
