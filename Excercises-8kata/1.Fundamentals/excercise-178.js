// Get the mean of an array

function getAverage(marks) {
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor((marks.reduce((p, n) => (p + n), 0) / marks.length));
}