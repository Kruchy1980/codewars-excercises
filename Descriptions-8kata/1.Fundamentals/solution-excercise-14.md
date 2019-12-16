## Sum of differences in array

Your task is to sum the differences between consecutive pairs in the array in descending order.

For example: sumOfDifferences([2, 1, 10]) Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

## Solution

function sumOfDifferences(arr) {

# If finally figure out that is enough to calculate the difference between maximum and minimum value of array the simple ternary function is enough but we have to consider that if there is no elements or element is only one than 0 is as a score so the arr length is need to be checked.

return arr.length ? Math.max(...arr) - Math.min(...arr) : 0;
}

## More informations about math functions in js are here:

https://www.w3schools.com/jsref/jsref_min.asp - Math.min()
https://www.w3schools.com/jsref/jsref_max.asp - Math.max()
