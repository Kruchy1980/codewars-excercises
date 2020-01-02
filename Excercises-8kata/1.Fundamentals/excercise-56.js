// Wilson primes


function amIWilson(p) {
    return [5, 13, 563].indexOf(p) > -1
}


/// Other solution

function amIWilson(p) {
    return p === 5 || p === 13 || p === 563
}