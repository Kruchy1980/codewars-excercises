# Convert number to reversed array of digits

Convert number to reversed array of digits
Given a random number:

C#: long;
C++: unsigned long;
You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]

### Solution

function digitize(n) {

##### Using some of methodes in chain we can return the array created from string and reversed

    return n.toString().split('').reverse().map(el => Number(el));

}

### More about methodes under url:

https://www.w3schools.com/jsref/jsref_tostring_number.asp
number.toString()

https://www.w3schools.com/jsref/jsref_split.asp - string.split() methode.

https://www.w3schools.com/jsref/jsref_reverse.asp - array.reverse() method

https://www.w3schools.com/jsref/jsref_map.asp - array.map() method
