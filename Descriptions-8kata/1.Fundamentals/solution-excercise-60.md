# Correct the mistakes of the character recognition software

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

### Solution

function countPositivesSumNegatives(input) {

##### Firstly we need to check if there is any or not empty array else we need to return empty array

    if (!input || !input.length) return []

##### Now declare the sum of positive an negarive including 0 intigers with array.filter() methode

    let sumP = input.filter(p => p > 0),
        sumN = input.filter(n => n <= 0)

##### And finally we return the quantity/as length/ of positive and calculated with array.reduce methode sum of negative intigers

    return [sumP.length, (sumN.reduce((el, i) => el + i, 0))]

}

### More about methodes used in this excercise under url:

https://www.w3schools.com/jsref/jsref_reduce.asp - array.reduce() methode

https://www.w3schools.com/jsref/jsref_filter.asp - array.filter() methode
