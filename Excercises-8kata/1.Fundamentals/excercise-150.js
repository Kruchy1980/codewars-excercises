// Exclusive "or" (xor) Logical Operator
// Solution 1
function xor(a, b) {
    // TODO: Program Me
    return (a === false && b === false || a === true && b === true) ? false : true;
}
// Solution 2
function xor(a, b) {
    // TODO: Program Me
    return (a === true && b === false || a === false && b === true);
}