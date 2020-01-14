# All Star Code Challenge #18

This Kata is intended as a small challenge for my students

All Star Code Challenge #18

Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

strCount('Hello', 'o') // => 1
strCount('Hello', 'l') // => 2
strCount('', 'z') // => 0
Notes:

The first argument can be an empty string
The second string argument will always be of length 1

### Solution

function strCount(str, letter){

##### It is enough to use here string.split() Method which changes the string to array of strings and shows the length of array of strings and decrement it by one.

    return str.split(letter).length-1;

}

### More about String.split() methode under url:

https://www.w3schools.com/jsref/jsref_split.asp - string.split() methode.
