## Beginner - Lost Without a Map

--Given an array of integers, return a new array with each value doubled.--

For example:

[1, 2, 3] --> [2, 4, 6]

For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

## Function is given.
function maps(x){
  //  x = array on which we can use methode map() which creates new array (do not mutate the old one) with the results of calling a function for every array element - once for each element in order.
  #  Now we can multiply the singular element of array by 2 -> el => el * 2
  return x.map(el => el * 2)
}
!! Remember map() does not!! exeute the funcrion for array elements without values.

### more about map() you can find here:
https://www.w3schools.com/jsref/jsref_map.asp