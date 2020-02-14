# CSV representation of array

Create a function that returns the CSV representation of a two-dimensional numeric array.

Example:

input:
[[ 0, 1, 2, 3, 4 ],
[ 10,11,12,13,14 ],
[ 20,21,22,23,24 ],
[ 30,31,32,33,34 ]]

output:
'0,1,2,3,4\n'
+'10,11,12,13,14\n'
+'20,21,22,23,24\n'
+'30,31,32,33,34'
Array's length > 2.

More details here: https://en.wikipedia.org/wiki/Comma-separated_values

### Solution

function toCsvText(array) {

##### by using the array.map() method we can execute something for each element of array so we are separating the arrays from main array and than by join converting them to string separated by '\n' nmarks which divides the elements of arrays to the separate lines.

    return array.map(el => el).join('\n');

}

## More about the methods used in here under url:

https://www.w3schools.com/jsref/jsref_map.asp - array.map() method

https://www.w3schools.com/jsref/jsref_join.asp - array.join('') method
