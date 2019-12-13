## Sum Mixed Array

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

## Solution

function sumMix(x){
    # we can use the reduce methode on the array to change and add all the numbers/trings from the array by using Number - to change the strings to number as well as using parseInt to chenge strings for intigers but Number is a little faster working embedded function so we are using Number instead of parseInt
return x.reduce((one,two) => Number(one) + Number(two))
}



## More about the differences between Numbers and parseInt functions we can find here:
https://www.geeksforgeeks.org/what-is-the-difference-between-parseint-and-number/