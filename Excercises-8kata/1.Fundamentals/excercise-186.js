// USD => CNY

// Longer solution
function usdcny(usd) {
    let res = (usd * 6.75).toFixed(2);
    return `${res} Chinese Yuan`;
}
// Shorter solution
function usdcny(usd) {
    return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}