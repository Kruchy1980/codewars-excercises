# Squash the bugs

Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

There will only be one 'longest' word.

### Solution

function findLongest(str) {

##### We can use map() method but earlier we must change given string to array thanks to split() methode which changes string to array of strings and finally we need to take out the largest value of that result

    return Math.max(...str.split(' ').map(word => word.length))

}
