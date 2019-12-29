// Surface Area and Volume of a Box

function getSize(width, height, depth) {
    let arr = [];
    let V = Number(2 * (width * height + height * depth + width * depth));
    let A = Number(width * height * depth)
    arr.push(V, A);
    return arr;
}