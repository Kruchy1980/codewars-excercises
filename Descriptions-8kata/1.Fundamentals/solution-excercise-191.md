# Find the Difference in Age between Oldest and Youngest Family Members

At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

### Solution

function differenceInAges(ages){

##### Here we need to use the Math methodes and spread operator to solve this excercises.

    return [Math.min(...ages),Math.max(...ages),Math.max(...ages) - Math.min(...ages)];

}

### More informations about used methodes under url:

https://www.w3schools.com/jsref/jsref_min.asp - Math.min() method

https://www.w3schools.com/jsref/jsref_max.asp - Math.max() method

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax - ...array - spread operaror
