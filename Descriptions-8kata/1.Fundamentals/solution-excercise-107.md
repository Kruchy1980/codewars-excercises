# Sentence Smash

Sentence Smash
Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

### Solution

// Smash Words

##### The shortest way in here is to use array.join() method which returns the array of strings into string

    function smash (words) {
    "use strict";
    return words.join(' ');

};

### More about array.join() methode under url:

https://www.w3schools.com/jsref/jsref_join.asp - array.join('') methode
