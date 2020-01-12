# Palindrome Strings

Palindrome strings
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

Implement a function that checks if something is a palindrome.

Examples
isPalindrome("anna") ==> true
isPalindrome("walter") ==> false
isPalindrome(12321) ==> true
isPalindrome(123456) ==> false

### Solved

function isPalindrome(line) {

##### Couple methodes used here in chain to split stringified 'line' into array ofseparate elements, than reverse them and convert again to string and check if the result is equal to stringified 'line'.

    return line.toString().split('').reverse().join('') === line.toString();

}

### Methodes used to resolve this excercise under url:

https://www.w3schools.com/jsref/jsref_tostring_number.asp
number.toString()

https://www.w3schools.com/jsref/jsref_split.asp - string.split() methode.

https://www.w3schools.com/jsref/jsref_reverse.asp - array.reverse() method

https://www.w3schools.com/jsref/jsref_join.asp - array.join('') methode
