# USD => CNY

Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

For Example:

usdcny(15) // => '101.25 Chinese Yuan'
usdcny(465) // => '3138.75 Chinese Yuan'
The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be rounded to the nearest hundredth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)

### Solution

// Longer solution
function usdcny(usd) {

##### Remember that the 1 usd = 6.75 Chonese Yuan

    let res = (usd*6.75).toFixed(2);
    return `${res} Chinese Yuan`;

}
// Shorter solution
function usdcny(usd) {

##### Rest is to use only gravis/templateString and number.toFixed() method

    return `\${(usd*6.75).toFixed(2)} Chinese Yuan`;

}

### More about number.toFixed() method under url:

https://www.w3schools.com/jsref/jsref_tofixed.asp - number.toFixed() method
