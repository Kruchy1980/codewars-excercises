// Palindrome Strings

function isPalindrome(line) {
    return line.toString().split('').reverse().join('') === line.toString();
}