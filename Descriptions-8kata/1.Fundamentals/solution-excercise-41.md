# Find the first non-consecutive number

Your task is to find the first element of an array that is not consecutive.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null or Nothing.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

1. Can you write a solution that will return null for both [] and [ x ] though? ( This is not tested, but you can write your own example test. )

### Solution

function firstNonConsecutive(arr) {

#### Declare result which will use find() methode which takes current Value and optiona index if needed and array oprional as well and returns the first element which passes the test in our case if is not equal to first element plus index value

    const result = arr.find((number, index) => number !== index + arr[0])

#### Return the result or 0 if there is any element in array

    return (result || result === 0) ? result : null;

}
