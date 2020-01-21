// Removing Elements

function removeEveryOther(arr) {
    return arr.filter((el, i) => i % 2 === 0 ? el : 0);
}