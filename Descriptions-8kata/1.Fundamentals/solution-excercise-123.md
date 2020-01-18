# Capitalization and Mutability

Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

### Solution

function capitalizeWord(word) {

##### Here we are using two methodes for a word string.toUpperCase() methode makes the letters capitalize but here we onlu capitalizing firs letter of string ATTENTION we need to remember that 'return' will only return the adequote element so it returns the first letter of a string so we need to add the rest of string using methode string.slice() which edtracts part of a string and returns the extractted parts in a new string

    return word[0].toUpperCase() + word.slice(1);

}

### More about methodes used in this excercise under url:

https://www.w3schools.com/jsref/jsref_touppercase.asp - string.toUpperCase() Method

https://www.w3schools.com/jsref/jsref_slice_string.asp - string.slice() method
