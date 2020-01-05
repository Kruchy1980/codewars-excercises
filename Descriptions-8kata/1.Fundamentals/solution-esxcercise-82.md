# How good are you really?

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

### Solution

function betterThanAverage(classPoints, yourPoints) {

##### It is the best way to use here reduce method to calculate the average in class specially without your score

    return classPoints.reduce((p,n) => p + n ,0)/ classPoints.length < yourPoints ;

}

### More about reduce under url:

https://www.w3schools.com/jsref/jsref_reduce.asp
