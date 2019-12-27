# What is between?

Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

### Solution

function between(a, b) {

### First is empty array is needed to be created

    let arr = [];

### Now with for loop we cane iterate whole the numbers from

range between a and b
for (let i = a; i <= b; i++) {

### Than we can add the numbers to empty array

        arr.push(i);
    }

### Unfortunately in codewars we need to use return normally it works without that line of code you can check it in cosole/

    return arr

}

### Mor aabout the push methode you can find under the link:

https://www.w3schools.com/jsref/jsref_push.asp
