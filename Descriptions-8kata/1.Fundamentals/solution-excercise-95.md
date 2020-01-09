# Is there a vowel in there?

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

### Solution

function isVow(a){

##### For short version is nice to use here methodes as : array.map() methode, string.fromCharcode() and regEx.test() methode for checking if string is included in array - our regEx is equal to our vowel letters - small in here so regEx we need is just /[aeiou]/. and checks if the element equals to our vowel letters than

    return a.map(el => /[aeiou]/.test(String.fromCharCode

##### Show us an equivalent of charCode number as string else show just the charCode

    (el)) ? String.fromCharCode(el) : el)

}

### More about methodes used to thid excercise under url:

https://www.w3schools.com/jsref/jsref_map.asp - array.map() methode

https://www.w3schools.com/jsref/jsref_regexp_test.asp - string.test() method

https://www.w3schools.com/jsref/jsref_fromcharcode.asp - String.fromChatCode() method
