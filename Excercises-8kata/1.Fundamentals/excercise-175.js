//No zeros for heros

// Longer solution
function noBoringZeros(n) {
    // your code
    let s = n.toString()
    return +(s.replace(/0 + $/, ''))
}


// Shorter solution
function noBoringZeros(n) {
    return +(`${n}`.replace(/0+$/, ''))
}