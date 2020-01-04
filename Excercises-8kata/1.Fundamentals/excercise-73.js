// Squash the bugs

function findLongest(str) {
    return Math.max(...str.split(' ').map(word => word.length))
}