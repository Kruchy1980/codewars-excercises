# Geometry Basics: Circle Circumference in 2D

This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y attributes. Circle objects have center which is a Point, and radius, which is a number.

Write a function calculating circumference of a Circle.

Tests round answers to 6 decimal places.

### Solution

function circleCircumference(circle) {

##### Simple pattern to circle circumference 2pir

    return 2 _ Math.PI _ circle.radius;

}
