# Volume of a Cuboid

Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

### Solution

var Kata;

##### Only mathematical calculation need to remeber that volume of cubold is length \* width \* height

Kata = (function() {
function Kata() {}

Kata.getVolumeOfCuboid = function(length, width, height) {
return length*width*height;
};

return Kata;

})();
