# Calculate average

Write function avg which calculates average of numbers in given list.

### Solution

function find_average(array) {
// your code here

##### The simplest way to solve the excercise is to use array.reduce() method

    return array.reduce((el,nel) =>(el + nel), 0)/array.length;

}

### More about array.reduce() method under url:

https://www.w3schools.com/jsref/jsref_reduce.asp - array.reduce() method
