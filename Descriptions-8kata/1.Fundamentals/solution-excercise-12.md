## Regexp Basics - is it a digit?

Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

## 1 Solution

String.prototype.digit = function() {

# here regular expression the \d which means all marks equal to digits are correct, beside 'this' used in here refers to global object in this function

return /^\d\$/.test(this);
};

## 2 Solution

String.prototype.digit = function() {

# The same meanning but wrote in more clear way so the marks from set [0-9] are correct, and 'this' in here refers to globqal object as well

return /^[0-9]\$/.test(this);
};

## More information about "this" will be found in here:

https://www.w3schools.com/js/js_this.asp

# for regular expressions are much more sites but one of them is:

https://kursjs.pl/kurs/regular.php#klasa
