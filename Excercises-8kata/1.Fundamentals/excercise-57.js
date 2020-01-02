// Difference of Volumes of Cuboids

// Solution 

function findDifference(a, b) {
    return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]));
}


// with reduce() methode

function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
}