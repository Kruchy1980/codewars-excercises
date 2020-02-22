# Geometry Basics: Circle Area in 2D

This series of katas will introduce you to basics of doing geometry with computers.

Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
The Circle class can be seen below:

// Represents a Circle where center is a Point and radius is a Number
class Circle {
constructor(center, radius) {
this.center = center;
this.radius = radius;
}
}
And the Point class can be seen below:

// Represents a Point where x and y are Numbers
class Point {
constructor (x,y) {
this.x = x;
this.y = y;
}
}
Tests round answers to 6 decimal places.

### Solution

function circleArea(circle){
// your code here

##### Using objects we need to take the value of radius from circle and the rest is just a mathematical pattern tjat circle area = Pi\*r\*\*2

    return (Math.PI\*circle.radius\*\*2);

}

### More about Math.PI under url:

https://www.w3schools.com/jsref/jsref_obj_math.asp - Math.Pi in manay more
