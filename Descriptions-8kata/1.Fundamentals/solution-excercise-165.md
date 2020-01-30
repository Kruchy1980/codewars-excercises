# Merge two sorted arrays into one

You are given two sorted arrays that contain only integers. Your task is to find a way to merge them into a single one, sorted in ascending order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Examples
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];
mergeArrays(arr1, arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr3 = [1, 3, 5, 7, 9];
arr4 = [10, 8, 6, 4, 2];
mergeArrays(arr3, arr4); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr5 = [1, 3, 5, 7, 9, 11, 12];
arr6 = [1, 2, 3, 4, 5, 10, 12];
mergeArrays(arr5, arr6); // [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
Happy coding!

### Solution

function mergeArrays(arr1, arr2) {

##### We are using couple methodes in here. The new Set Methode creates a doubled elements as one elementm arr.concat(arr) methode connects the arrays, the spread operator divides it for singular elements, and sort(arr,arr) is sorting the elements in array/s

    return [...new Set(arr1.concat(arr2))].sort((arr1,arr2) => arr1-arr2);

}

### More about methodes used in this excercise under url:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax - ...array - spread operaror

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set - new Set() Method

https://www.w3schools.com/jsref/jsref_concat_array.asp - array.concat() method

https://www.w3schools.com/jsref/jsref_sort.asp arr.sort() method
