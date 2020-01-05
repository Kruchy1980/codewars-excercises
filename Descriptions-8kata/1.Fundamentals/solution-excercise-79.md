# Find the smallest integer in the array

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

### Solution

class SmallestIntegerFinder {

###### I here the simplest way is to use spread operator to check every element of args array separately and return the minimum value with MAth.min() method.

    findSmallestInt(args) {
    return Math.min(...args);
    }

}

### More abour the methodes under url:

https://www.w3schools.com/jsref/jsref_min.asp - Math.min() methode

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax - spread operator ECMA script 6
