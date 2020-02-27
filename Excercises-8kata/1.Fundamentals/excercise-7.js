// The 'if' function

// 1st solution
function _if(bool, func1, func2) {
    // ...
    if (bool) {
        return func1();
    } else {
        return func2();
    }
}

//2nd solution
function _if(bool, func1, func2) {
    return bool ? func1() : func2();
}