// Is it a palindrome?

function isPalindrome(x) {
    let x1 = x.toLowerCase();
    return x1 === x1.split('').reverse().join('');
}
