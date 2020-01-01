# A Needle in the Haystack

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
should return "found the needle at position 5"

### Longer Solution

function findNeedle(haystack) {

##### First declare variable which chcks the index of 'needle'

    let position = haystack.indexOf('needle');

##### Than insert the variablento the string whatever methode

    return `found the needle at position ${position}`;

}

### Shorter solution

function findNeedle(haystack) {

##### Without declaring any variables we czn insert the index of the 'needle' into answer string directly

    return `found the needle at position ${haystack.indexOf('needle')}`;

}

### More about indexOf() methode under url:

https://www.w3schools.com/jsref/jsref_indexof.asp
