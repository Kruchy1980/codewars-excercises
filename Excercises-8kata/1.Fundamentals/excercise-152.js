// Calculate average

function find_average(array) {
    // your code here
    return array.reduce((el, nel) => (el + nel), 0) / array.length;
}