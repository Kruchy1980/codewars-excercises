# Grasshopper - Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

### Solution

var summation = function (num) {

##### Firstly declare the variable which value is equal 0 than

    let sum = 0;

##### Make a loop which wil make num the range from 1 to num

    for (let i = 1; i <= num; i++) {

##### Than iterate the singular element/intiger from the range and equal it to the prev value

    sum += i;
    }

#### Finaly rerturn the result

    return sum

}
