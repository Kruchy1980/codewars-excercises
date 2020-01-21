# Enumerable Magic #4 - True for None?

Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.

Ruby: If you need help, here is a reference:

http://www.rubycuts.com/enum-none

### Solution 1

function none(arr, fun){

##### By using the arr.some() function we are checking for every element of array the function declared so if the function is that the elements should be less than function numner that this statement is not correct that is why we can write it that way

return arr.some(fun) ? false : true;
}

### Solution 2 - but that way is way shorter ;)

function none(arr, fun){
return !arr.some(fun);
}

### More about arr.some() method under url:

https://www.w3schools.com/jsref/jsref_some.asp - arr.some() method
