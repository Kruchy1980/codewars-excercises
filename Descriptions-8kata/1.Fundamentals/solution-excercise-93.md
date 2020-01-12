# Sum of positive

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

### Solution

function positiveSum(arr) {

##### Here is easy to use .reduce methode inside which we will check if the numbers in array are or not negativve and than executes adeuate action.

    return arr.reduce((arr,el) => arr + (el >= 0 ? n : 0) , 0);

}
