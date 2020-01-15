# Count Odd Numbers below n

Given a number n, return the number of positive odd numbers below n, EASY!

oddCount(7) //=> 3, i.e [1, 3, 5]
oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
Expect large Inputs!

### Solution

function oddCount(n){

##### It is enough here to use Math.floor methode to return numbers divided by 2 - no need to use module '%' to resolve the problem

    return Math.floor(n/2);

}

### More about Math.floor() methode under url:

https://www.w3schools.com/jsref/jsref_floor.asp - Math.floor() method
