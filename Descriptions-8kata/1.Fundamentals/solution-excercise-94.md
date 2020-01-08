# Fake Binary

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

### Solution

function fakeBin(x){

##### One of the solutions is to separate the elements of string and hange them to the array of strings with string.split('') methode, than we can map the fresh array and find the elements we are interested by replacing them for 0 or on dependend of the value of number - ternary function is used here. On the end we need to join the array elements into string using the join method.

    return x.split('').map(el => el < 5 ? 0 : 1).join('');

}

### More about the used methodes under url's:

https://www.w3schools.com/jsref/jsref_split.asp - string.split() methode.

https://www.w3schools.com/jsref/jsref_map.asp - array.map() method

https://www.w3schools.com/jsref/jsref_join.asp - array.join('') methode
