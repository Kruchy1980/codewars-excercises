# Find out whether the shape is a cube

To find the volume (centimeters cubed) of a cuboid you use the formula:

volume = Length _ Width _ Height

But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

It's up to you to find out whether the cuboid has equal sides (= is a cube).

Return true if the cuboid could have equal sides, return false otherwise.

Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

Note: the sides must be integers

### Solution

var cubeChecker = function(volume, side){

##### Simple math calculation with using operqators is enough here. We need to remember that cube volume is equal of side \*\* 3 where side is length or height or width

    return (volume > 0 && side > 0 && volume === side \*\* 3);

};

### More about operators under url:

https://www.w3schools.com/jsref/jsref_operators.asp - operators in JavaScript
