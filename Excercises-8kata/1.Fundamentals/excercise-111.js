// Find out whether the shape is a cube

var cubeChecker = function (volume, side) {
    return (volume > 0 && side > 0 && volume === side ** 3);
};