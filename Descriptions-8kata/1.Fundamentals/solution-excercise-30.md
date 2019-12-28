# M

Write a simple regex to validate a username. Allowed characters are:

lowercase letters,
numbers,
underscore
Length should be between 4 and 16 characters (both included).

### Solution

function validateUsr(username) {
res = /^([a-z\d\_]){4,16}\$/.test(username)
return res
}

##### RegEx:

- [a-z] - all small letters
- \d - all numbers
- \_ or \_ - underscore

### More about regulr expressions under link:

https://kursjs.pl/kurs/regular.php#klasa

- But there are more and more of helpers to regEx'es
