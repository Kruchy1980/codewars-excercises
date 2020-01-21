# Training JS #32: methods of Math---round() ceil() and floor()

From this lesson, we learn about JS static object: Math. It mainly helps us to carry out mathematical calculations. It has a lot of properties and methods. Some of the properties and methods we rarely used. So we only learn some common methods.

The properties of the Math object are some constants, such as PI, on behalf of the approximate value of pi. The usage is Math.PI. I will no longer introduce one by one, please refer to the manual:

Math Object
In this lesson we learn three methods to turn a number into an integer: round(), ceil() and floor().

Their definitions and detailed information:

Math.round()
Math.ceil()
Math.floor()
First of all, we have to understand the first thing, all the methods of the Math object are static methods. It means that you need to use the Math method like this: Math.round(1.23). Not like this: (1.23).round().

Here we use some examples to understand their usage:

console.log(Math.round(1.45)); //output:1
console.log(Math.ceil(1.45)); //output:2
console.log(Math.floor(1.45)); //output:1
console.log(Math.round(1.55)); //output:2
console.log(Math.ceil(1.55)); //output:2
console.log(Math.floor(1.55)); //output:1
We can see, ceil() always rounding up to get a large integer; floor() always rounding down to get a small integer; round() according to the fractional part and round it to integer.

### Solution

function roundIt(n){

##### It is easy to use here ternaty statement to solve the excercise

##### Firsstly we need to separate the number by decimal to use that we neet to change it to string than split it by '.', later onlu use the Math methodes to get specified result depended of number of intiger and decimal lengths

    let numb = n.toString().split('.')
    return (numb[0].length < numb[1].length) ? Math.ceil(n)
    : (numb[0].length > numb[1].length) ? Math.floor(n)
    : Math.round(n); ;

}

### More about methodes used in this excercise under url:

https://www.w3schools.com/jsref/jsref_tostring_number.asp
number.toString()

https://www.w3schools.com/jsref/jsref_split.asp - string.split() methode.

https://www.w3schools.com/jsref/jsref_ceil.asp - Math.ceil() method

https://www.w3schools.com/jsref/jsref_floor.asp - Math.floor() method

https://www.w3schools.com/jsref/jsref_round.asp - Math.round - math methode in javascript
