// noobCode 01: SUPERSIZE ME.... or rather, this integer!

function superSize(num) {
    return +(`${num}`.split('').sort((a, b) => b - a).join(''));
}

// With number
function superSize(num) {
    return Number(`${num}`.split('').sort((a, b) => b - a).join(''));
}