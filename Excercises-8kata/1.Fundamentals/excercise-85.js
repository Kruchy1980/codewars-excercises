// Array plus array

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((p, n) => p + n);
}