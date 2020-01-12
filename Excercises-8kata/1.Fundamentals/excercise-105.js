// If you can't sleep, just count sheep!!

var countSheep = function (num) {
    let res = '';
    for (let x = 1; x <= num; x++) {
        res += `${x} sheep...`
    }
    return res;
}