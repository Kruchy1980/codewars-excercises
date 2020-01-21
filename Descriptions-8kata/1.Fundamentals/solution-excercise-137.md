# Enumerable Magic #2 - True for Any?

Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

Ruby: If you get stuck, you can read up here:

http://www.rubycuts.com/enum-any

### Solution

###### Not complicated and arr.some() method used

function any(arr, fun){
return arr.some(fun);
}

### More abour arr.some function under url:

https://www.w3schools.com/jsref/jsref_some.asp - arr.some() method
