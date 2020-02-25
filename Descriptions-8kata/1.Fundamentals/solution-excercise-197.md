# Filling an array (part 1)

We want an array, but not just any old array, an array with contents!

Write a function that produces an array with the numbers 0 to N-1 in it.

For example, the following code will result in an array containing the numbers 0 to 4:

arr(5) // => [0,1,2,3,4]

### Solution

##### By using the Array.from() method we can easily create the array in specified range

const arr = N => Array.from({length: N}, (el, i) => i);

### More about Array,from() method under url:

https://www.w3schools.com/jsref/jsref_from.asp - Array.from() method
