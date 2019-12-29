# Area of a Square

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

### Solution

function squareArea(A){

#### Here we need to use Math Object - PI - which returns pi value, methode toFixed(n), which displays as many digits after dot as 'n' equals(remembet that that methode converts numbers to strings so the specified function is needed to be used) and function Number which converts strings into numbers

    return Number(((A*4/(2*Math.PI))\*\*2).toFixed(2));

}

##### More about the methodes and function under this links:

https://www.w3schools.com/jsref/jsref_number.asp - number function

https://www.w3schools.com/js/js_math.asp - Math Object PI

https://www.w3schools.com/jsref/jsref_tofixed.asp - toFixed() methode
