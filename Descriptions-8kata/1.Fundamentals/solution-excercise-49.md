# Convert a String to a Number!

Note: This kata is inspired by Convert a Number to a String!. Try that one too.

Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
stringToNumber("1234") == 1234
stringToNumber("605" ) == 605
stringToNumber("1405") == 1405
stringToNumber("-7" ) == -7

### Solution 1

var stringToNumber = function(str){

##### To convert string number to number is enough to use Numper or parse it by parseInt() functions

    return Number(str);

}

### Solution 2

var stringToNumber = function(str){
return parseInt(str);
}

### More about these two methodes undeer link:

https://www.w3schools.com/jsref/jsref_number.asp - Number() funcction

https://www.w3schools.com/jsref/jsref_parseint.asp - parseInt() function
