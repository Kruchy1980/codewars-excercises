// N-th Power

function index(array, n) {
    //your code here
    return array.length - 1 >= n ? (array[n] ** n) : -1;
}