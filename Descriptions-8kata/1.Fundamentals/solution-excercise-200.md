# Are arrow functions odd?

Time to test your basic knowledge in functions! Return the odds from a list:

odds([1,2,3,4,5]) #=> [1,3,5]

### Solution

function odds(values){
// arrow it

##### With using array.filter() method and Mathematical modulo we can easy solve the problem

    return values.filter(el => el % 2 != 0 );

}

### More about used method under url:

https://www.w3schools.com/jsref/jsref_filter.asp - array.filter() method
