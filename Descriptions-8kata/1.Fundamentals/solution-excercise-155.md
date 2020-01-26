# Beginner Series #4 Cockroach

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

cockroachSpeed(1.08) == 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

### Solution

function cockroachSpeed(s) {

##### Easy mathematical action with using of Math.floor() method

//Good Luck!
return Math.floor(((s/3600)\*100000));
}

### More about Math.floor() method under url:

https://www.w3schools.com/jsref/jsref_floor.asp - Math.floor() method
