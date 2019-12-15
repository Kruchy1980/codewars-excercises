## Sum The Strings

Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string)

## Solution

function sumStr(a,b) {

# First we have to convert strings to numbers by Number Methode, than we need to concat them and the result will be in numberr so at the end we have to convert the number to strinb by toString() Methode

return (Number(a) + Number(b)).toString()
}

## More about toString() Methode we can find here:

https://www.w3schools.com/jsref/jsref_tostring_number.asp
