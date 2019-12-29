# Remove First and Last Character

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

### Soution - long

function removeChar(str){

### Execute step by sten single steps first exchange string for array

    let str1 = str.split('')

#### remove first element of array

    str1.shift(0);

#### remove last element of array

    str1.pop();

#### return array converted for string

    return str1.join('')

};

### Solution - short

function removeChar(str) {

#### Using slice - methode for string which exctracts parts of a string and returns the extracted parts in a new string

    return str.slice(1, -1);

};

#### More information about specified methodes under link:

https://www.w3schools.com/jsref/jsref_split.asp - string.split() methode

https://www.w3schools.com/jsref/jsref_shift.asp - shift() methode

https://www.w3schools.com/jsref/jsref_pop.asp - pop() methode

https://www.w3schools.com/jsref/jsref_join.asp - join() methode

https://www.w3schools.com/jsref/jsref_slice_string.asp - slice methode for string
