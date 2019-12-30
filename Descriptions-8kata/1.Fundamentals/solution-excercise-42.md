# altERnaTIng cAsE <=> ALTerNAtiNG CaSe

altERnaTIng cAsE <=> ALTerNAtiNG CaSe
Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string.

### Solution

String.prototype.toAlternatingCase = function () {

#### declare empty string

    let str = '';

#### declare for loop for every element of strinf

    for (let i = 0; i < this.length; i++) {

#### Conditional function and using this as the string given to check so for each letter of this/string check if is lowerCase() and toggle the letter size

        if (this[i] === this[i].toLowerCase()) {

#### Add to empty string the result

        str += this[i].toUpperCase();
        } else {

#### Else do opposite way

        str += this[i].toLowerCase();
        }
    }

#### Return result of string

    return str

}

##### More about keyword this and methodes toLower and toUpperCase() under links:

https://www.w3schools.com/js/js_this.asp - this keyword

https://www.w3schools.com/jsref/jsref_tolowercase.asp - toLowerCase() methode

https://www.w3schools.com/jsref/jsref_touppercase.asp - toUpperCase() methode
