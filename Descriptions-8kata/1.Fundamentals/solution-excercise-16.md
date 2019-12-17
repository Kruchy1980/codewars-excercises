## Sort and Star

You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

The returned value must be a string, and have "\*\*\*" between each of its letters.

You should not remove or add elements from/to the array.

## Solution

function twoSort(s) {

# By using chaining functions it can be written in one line: using here methodes as sort() for sorting given array, split for splitting the string from array to single letters and finally joining with stars to join the letters and put the stars inside of them

return s.sort()[0].split('').join('\*\*\*');
}

## More informations about singular methodes can be found here:

https://www.w3schools.com/jsref/jsref_sort.asp - .sort() array methode

https://www.w3schools.com/jsref/jsref_split.asp - .split() string methode

https://www.w3schools.com/jsref/jsref_join.asp - .join() array methode
