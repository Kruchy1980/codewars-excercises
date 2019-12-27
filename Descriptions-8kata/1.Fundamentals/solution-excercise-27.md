# Multiple of index

Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

### Solution

function multipleOfIndex(array) {

### Here I use filter methode which creates new array with all elements which are passing the condition/test provided as function

    return array.filter((num, i) => num % i === 0);

}

#### More about filter methode under link:

https://www.w3schools.com/jsref/jsref_filter.asp
