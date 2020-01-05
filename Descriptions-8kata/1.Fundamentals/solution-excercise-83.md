# Beginner - Reduce but Grow

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 _ 2 _ 3 \* 4 = 24

### Solution

function grow(x){

##### Simple reduce() methode used here

    return x.reduce((b,n) => b \* n);

}

### More about reduce under url:

https://www.w3schools.com/jsref/jsref_reduce.asp
