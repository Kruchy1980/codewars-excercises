// A Needle in the Haystack
// Longer solution

function findNeedle(haystack) {
    let position = haystack.indexOf('needle');
    return `found the needle at position ${position}`;
}

// Shorter solution

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
}