// Sum of differences in array

function sumOfDifferences(arr) {
    return arr.length ? Math.max(...arr) - Math.min(...arr) : 0;
}