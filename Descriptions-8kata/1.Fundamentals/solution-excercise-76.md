# Is it a palindrome?

Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.

In Racket, the function is called palindrome?

(palindrome? "nope") ; returns #f
(palindrome? "Yay") ; returns #t

### Solution

function isPalindrome(x) {

##### Firstly make a variable which is defined as string 'x' toLowerCase() and later on make it equal to reversed string but to reverse the string we need to split it to single letters as array elements/substrings and later aftter reversing combine it with join() methode to string again.

    let x1 = x.toLowerCase();
    return x1===x1.split('').reverse().join('');

}

### More about methodes used i this excercise under url :

https://www.w3schools.com/jsref/jsref_tolowercase.asp - string.toLowerCase() method

https://www.w3schools.com/jsref/jsref_split.asp - string.split() method

https://www.w3schools.com/jsref/jsref_reverse.asp - array.reverse() method

https://www.w3schools.com/jsref/jsref_join.asp - array.join() ethod
