# Third Angle of a Triangle

You are given two angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.

### Solution

function otherAngle(a, b) {

##### Simple math need to remember that the sum of all three angles in the triangle is equal to 180 degrees.

    return 180 - (a + b);

}
