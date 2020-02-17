# noobCode 01: SUPERSIZE ME.... or rather, this integer!

Write a function that rearranges an integer into its largest possible value.

superSize(123456) //654321
superSize(105) // 510
superSize(12) // 21
If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

### Solution

function superSize(num){

##### Firstly we need to convert number to string what let us to use the string.split() method which returns an array of strings, than we need to sort the array with array.sort() method and later we need to create the one element firstly as as string with array.join() method and finally by using the martk '+' operator convert the score for number - we can use Number as well.

    return +(`${num}`.split('').sort((a,b) => b-a).join(''));

}

function superSize(num){

##### Solution with Number

return Number(`${num}`.split('').sort((a,b) => b-a).join(''));
}

### More about methodes used to solve the excercise

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals - template strings / gravis

https://www.w3schools.com/jsref/jsref_split.asp - string.split() method.

https://www.w3schools.com/jsref/jsref_sort.asp arr.sort() method

https://www.w3schools.com/jsref/jsref_join.asp - array.join('') method
