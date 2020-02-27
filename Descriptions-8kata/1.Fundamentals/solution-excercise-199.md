# isReallyNaN

I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.

Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.

Any solution is acceptable!

### Solution

const isReallyNaN = (val) => {

##### We need to add the Number to tcheck if it i not a Number as well

    return Number.isNaN(val);

}

### More about used methodes under links:

https://www.w3schools.com/jsref/jsref_number.asp - Number() function

https://www.w3schools.com/jsref/jsref_isnan_number.asp - Number.isNaN()
