# Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

##### Description:

Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

Examples
remove("Hi!") === "Hi!"
remove("Hi!!!") === "Hi!"
remove("!Hi") === "Hi!"
remove("!Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!"
remove("Hi") === "Hi!"

### Solution

function remove(s){
//coding and coding....

##### It is enough to remove all the exclamation marks with string.replace() method and regEx and on the end of string add one exclamation mark.

    return s.replace(/!/g, '') + '!';

}

### More about used method under url:

https://www.w3schools.com/jsref/jsref_replace.asp - string.replace() method

https://www.w3schools.com/js/js_regexp.asp - regExp
