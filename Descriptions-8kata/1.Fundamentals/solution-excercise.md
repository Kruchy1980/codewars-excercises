# Enumerable Magic #25 - Take the First N Elements

Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

### Solution

function take(arr, n) {

### Easy to use just slice(a, b) methode which returns the selected elements in an array as a new array object.

    return arr.slice(0, n);

}

## More about slice methode can be found here:

function take(arr, n) {
return arr.slice(0, n);
}
