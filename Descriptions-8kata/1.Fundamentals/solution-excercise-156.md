# Is it a number?

Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

Valid examples, should return true:

isDigit("3")
isDigit(" 3 ")
isDigit("-3.23")
should return false:

isDigit("3-4")
isDigit(" 3 5")
isDigit("3 5")
isDigit("zero")

### Solution

function isDigit(s) {

###### We need to check if it is true that the string is a number or not and we can not check the types as well so we need to use just 2\* equal marks beside there can be also float numbers so we can not use the function parseInt() just parse Float()

    return s==parseFloat(s);

}

### More about functions checking number convertions under url's:

https://www.w3schools.com/jsref/jsref_parsefloat.asp - parseFlot() function


https://www.w3schools.com/jsref/jsref_parseint.asp - parseInt() function
