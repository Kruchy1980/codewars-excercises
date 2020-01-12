# Is the string uppercase?

Is the string uppercase?
Task
Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

### Solution

String.prototype.isUpperCase = function() {

##### Here is needed to compare if the string which the function should check is equal to the same string write toUpperCase().

    return this.toString() === this.toUpperCase();

}

### More about used methodes under url:

https://www.w3schools.com/jsref/jsref_tostring_number.asp
number.toString() Method

https://www.w3schools.com/jsref/jsref_touppercase.asp - string.toUpperCase() Method
