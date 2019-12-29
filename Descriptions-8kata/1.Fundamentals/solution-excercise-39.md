# Surface Area and Volume of a Box

Write a function that returns the total surface area and volume of a box as an array: [area, volume]

### Solution

function getSize(width, height, depth) {

#### Declare empty array

    let arr = [];

#### Pattern for cirduit of box

    let V = Number(2 _ (width _ height + height _ depth + width _ depth));

#### Pattern for Area of box

    let A = Number(width* height * depth)

#### Add both scores to empty array

    arr.push(V,A);

#### Return updated array

    return arr;

}
