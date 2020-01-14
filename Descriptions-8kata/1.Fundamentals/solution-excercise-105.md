# If you can't sleep, just count sheep!!

If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

### Solution

var countSheep = function (num){

##### Firstly declare variable as empty string

    let res = '';

##### Now for loop for values from 1 to num

    for (let x = 1; x <= num; x++) {

##### Now add single elements to string

    res += `${x} sheep...`
    }

##### Return result

    return res;

}

### More about for statement under url:

https://www.w3schools.com/jsref/jsref_for.asp
