// Grasshopper - Check for factor

function checkForFactor(base, factor) {
    return (base % factor === 0) ? true : false;
}

// Shorter version

function checkForFactor(base, factor) {
    return base % factor === 0;
}