# Exclamation marks series #1: Remove a exclamation mark from the end of string

##### Description:

Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

##### Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
Note
Please don't post issue about difficulty or duplicate.

### Solution

function remove(s){
//coding and coding....

##### With the regular expressions using \$ which means that we are talking of the last element of string, we can use just the string.replace() method to replace our exclamation mark with empty string.

    return s.replace(/!\$/, '');

}

### More about the regExp and string.rqaplace() method under url:

https://www.w3schools.com/js/js_regexp.asp - regExp

https://www.w3schools.com/jsref/jsref_replace.asp - string.replace() method
