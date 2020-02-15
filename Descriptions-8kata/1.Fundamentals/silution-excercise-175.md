# No zeros for heros

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

### Solution

#### Longer solution

function noBoringZeros(n) {
// your code

##### In this solution we firstly converting number to string and define it as a new variable,

    let s = n.toString()

##### Than we can use replace with expression /0 + \$/ which means that we are interesting in zeros at the end of string not all zeros of the string, and than return it as number which '+' mark lets us to do it.

    return +(s.replace(/0 + \$/, ''))

}

#### Shorter solution

function noBoringZeros(n) {

##### In this solution we are converting the number to string by using template string, and the rest is all the same

return +(`${n}`.replace(/0+\$/, ''))
}

### More about the methodes used here under url:

https://www.w3schools.com/jsref/jsref_replace.asp - string.replace() method

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals - template strings

https://www.w3schools.com/js/js_regexp.asp - regExp
