# Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"
Note
Please don't post issue about difficulty or duplicate. Because:

That's unfair on the kata creator. This is a valid kata and introduces new people to javascript some regex or loops, depending on how they tackle this problem. --matt c

### Solution

function replace(s){

##### It is enough to use the regEx and string.replace() method

    //coding and coding....
    return s.replace(/[a,e,i,o,u]/gi, '!');

}

### More about methodes used in this excrcise under url:

https://www.w3schools.com/jsref/jsref_replace.asp - string.replace method

https://www.w3schools.com/js/js_regexp.asp - regExp
