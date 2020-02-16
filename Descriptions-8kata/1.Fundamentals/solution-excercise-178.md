# Get the mean of an array

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

### Solution

function getAverage(marks){
//TODO : calculate the downwar rounded average of the marks array

##### By using Math.floor() method and array.reduce() method we can easily solve that exxcercise

    return Math.floor((marks.reduce((p,n) => (p+n),0)/marks.length));

}

### More information about used methodes under url:

https://www.w3schools.com/jsref/jsref_reduce.asp - array.reduce() method

https://www.w3schools.com/jsref/jsref_floor.asp - Math.floor() method
