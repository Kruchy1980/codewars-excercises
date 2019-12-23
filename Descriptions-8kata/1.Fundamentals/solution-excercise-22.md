# get character from ASCII Value

Write a function which takes a number and returns the corresponding ASCII char for that value.

For ASCII table, you can refer to http://www.asciitable.com/

### Solution

function getChar(c){

##### The simplest solution is to use methode fromCharCode() which returns marks/letters wrote as ASCII code

    return String.fromCharCode(c)

}

### More details about the methode fromCharCode() can be found on:

https://www.w3schools.com/jsref/jsref_fromcharcode.asp
