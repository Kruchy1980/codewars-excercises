# Square(n) Sum

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

### Solution

function squareSum(numbers){

##### Firstly declare the variable with value '0'

    let sum = 0;

##### Now use the for loop to act the same equation for each element of array

    for (i = 0; i < numbers.length; i++) {

##### Than add to previous variable sum of numbers powered to 2

    sum += (numbers[i]\*\*2);
    }

##### Finaly return sum

    return sum;

}

### OR we can use much shorter solution with reduce() methode

function squareSum(numbers){
return numbers.reduce((sum,num) => sum + (num \* num), 0);
}

### Mmore about reduce() methode under url:

https://www.w3schools.com/jsref/jsref_reduce.asp
