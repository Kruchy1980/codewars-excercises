# Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

### Solution

function removeExclamationMarks(s) {

##### It is enough to use regEx and string.replace() methode because if we will use only string '!' than will be removed onlu one exclamation mark not all in the string or we will need to use for loop to remove them allbut it has no sense because we do not know how many of them is in the string

    return s.replace(/!/g, '');

}

### More about string.replace() method under url:

https://www.w3schools.com/jsref/jsref_replace.asp - string.replace method
