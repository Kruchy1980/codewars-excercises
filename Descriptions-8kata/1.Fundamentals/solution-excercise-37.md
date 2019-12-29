# Area of a Square

Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

### Solution

function squareArea(A){

#### Here we need to use Math Object - PI - which returns pi value, methode toFixed(n), which displays as many digits after dot as 'n' equals(remembet that that methode converts numbers to strings so the specified function is needed to be used) and function Number which converts strings into numbers

    return Number(((A*4/(2*Math.PI))\*\*2).toFixed(2));

}

###### Attention to find the side dimention we need to covert the pattern to the circuit of a circle which normally is

circuit(A) = (Pi \* r) \*\* 2

##### Our unkown is r - radius which is the side of our sqauare to find it we need to convert the pattern for

r = circuit(A)/ 2\* PI

##### Now we need to remember that we have been given just a quarter of circuit so we need to time it 4 times so finally the pattern for circuit will look like this:

r = circuit(A) \*4 / 2\* PI

##### And than finally we need to power it to square =

r\*\*2 - this will be our area

### Finally we need to use toFixed(2) methode to display the score with 2 decimals. - but it converts the score to string so we need to use Number() function for the end of calculation to get the score as a Number.

##### More about the methodes and function under this links:

https://www.w3schools.com/jsref/jsref_number.asp - number function

https://www.w3schools.com/js/js_math.asp - Math Object PI

https://www.w3schools.com/jsref/jsref_tofixed.asp - toFixed() methode
