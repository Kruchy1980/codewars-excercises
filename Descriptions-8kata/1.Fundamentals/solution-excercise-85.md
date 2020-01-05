# Array plus array

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.

### Solution

function arrayPlusArray(arr1, arr2) {

##### Here is needed to be use concat() method which adds the elements of two or more if needed arrays and returns new array, than for calculating sum of full array we can use reduce() method

    return arr1.concat(arr2).reduce((p, n) => p + n);

}

### More about the methodes under url:

https://www.w3schools.com/jsref/jsref_concat_array.asp - array.concat(arr1,arr2,...,arr(n) methode

https://www.w3schools.com/jsref/jsref_reduce.asp - array.reduce() method
