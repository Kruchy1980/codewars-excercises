# Calculate Price Excluding VAT

Write a function that calculates the original product price, without VAT.

Example
If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

VAT is always 15% for the purposes of this Kata.
Round the result to 2 decimal places.
If null value given then return -1

### Solution

//return price without vat
function excludingVatPrice(price){
// your code

##### After calculating we need to convert score to number and display it with 2 decimals so we can use the Number function and number.toFixed(2) method

    return price === null ? -1 : Number((price/1.15).toFixed(2));

}

### More about methohdes used in this excercise under url:

https://www.w3schools.com/jsref/jsref_tofixed.asp - number.toFixed() method

https://www.w3schools.com/jsref/jsref_number.asp - Number() function
