# No Loops 2 - You only need one

- No Loops Allowed \*

You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

Looking for more, loop-restrained fun? Check out the other kata in the series:

https://www.codewars.com/kata/no-loops-1-small-enough

https://www.codewars.com/kata/no-loops-3-copy-within

### Solution

function check(a,x){

##### It is simple to solve when we use the array.includes() method

    return a.includes(x);

};

### More about array.includes() method under url:

https://www.w3schools.com/Jsref/jsref_includes_array.asp
