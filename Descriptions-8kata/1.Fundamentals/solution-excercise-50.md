# Counting sheep...

Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true, true, true, false,
true, true, true, true ,
true, false, true, false,
true, false, false, true ,
true, true, true, true ,
false, false, true, true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

### Solution

function countSheeps(arrayOfSheep) {

##### Here we can use simple filter function which checks Boolean value which is returned as true.

    return arrayOfSheep.filter(Boolean).length

}
