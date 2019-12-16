// Regexp Basics - is it a digit?
// 1 Solution

String.prototype.digit = function () {
    return /^\d$/.test(this);
};

// 2 Solution

String.prototype.digit = function () {
    return /^[0-9]$/.test(this);
};