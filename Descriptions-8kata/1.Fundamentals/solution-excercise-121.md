# The Feast of Many Beasts

All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

### Solution 1

function feast(beast, dish) {

##### We need just return two compare elements if first and last character of string is equal. For first character we are using index '0' in square brackets and for last charater/element of string we need to use .length-1 property to find last letter of string

    return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1];

}

### Solution2

function feast(beast, dish) {

#### The same solution but using string.slice() method to find the last character of string

    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);

}

### More about the string.slice() methode and .length property under url:

https://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string - length property

https://www.w3schools.com/jsref/jsref_slice_string.asp - string.split() method
