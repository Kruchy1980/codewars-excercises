// Remove First and Last Character

// Long Solution

function removeChar(str) {
    let str1 = str.split('')
    str1.shift(0);
    str1.pop();
    return str1.join('')
};

// Short solution
function removeChar(str) {
    return str.slice(1, -1);
};