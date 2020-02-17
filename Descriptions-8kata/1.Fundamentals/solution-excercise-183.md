# Multiplication table for number

Your goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:

1 _ 5 = 5
2 _ 5 = 10
3 _ 5 = 15
4 _ 5 = 20
5 _ 5 = 25
6 _ 5 = 30
7 _ 5 = 35
8 _ 5 = 40
9 _ 5 = 45
10 _ 5 = 50
P. S. You can use \n in string to jump to the next line.

### Solution

function multiTable(n) {

##### Using the spread operator and square brakets we are creating an array wity 10 undefined elements. Than use map to execute specific action for every element of table

    return [...Array(10)].map((el,i)=>`${i+1} * ${n} = $

##### Finaly join the elements separated with line breaker '\n' to get the specified score.

    {n*i+n}`).join('\n')

}

### More about methodes used here under url:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax - ...array - spread operaror

https://www.w3schools.com/jsref/jsref_map.asp - array.map() method

https://www.w3schools.com/jsref/jsref_join.asp - array.join('') method

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals - template strings
