# Abbreviate a Two Word Name

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

### Solution

function abbrevName(name){

##### First change the string to array with two elements with split() methode, Than map the singular elements of array as substrings which extracts the chczacters from string which is an element of created array by two specified indices (start and stop as index number) than change it toUpperCase with adequote methode and returns the new sub strings and finally put it together by join() methode separated with dot - this methode creates strings from array.

    return name.split(' ').map(el => el.substring(0,1).toUpperCase).join('.');

}

### More about methodes used for solution of this problem under url:

https://www.w3schools.com/jsref/jsref_split.asp - string.split()

https://www.w3schools.com/jsref/jsref_map.asp - array.map() methode

https://www.w3schools.com/jsref/jsref_substring.asp - substring() methode

https://www.w3schools.com/jsref/jsref_touppercase.asp - toUpperCase() methode

https://www.w3schools.com/jsref/jsref_join.asp - array.join() methode
