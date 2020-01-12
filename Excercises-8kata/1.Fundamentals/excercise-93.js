// Sum of positive

function positiveSum(arr) {
    return arr.reduce((arr, el) => arr + (el >= 0 ? el : 0), 0);
}