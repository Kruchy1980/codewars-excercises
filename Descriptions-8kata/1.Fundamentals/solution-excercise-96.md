# Convert to Binary

Task Overview
Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

to*binary(1) /* should return 1 _/
to_binary(5) /_ should return 101 _/
to_binary(11) /_ should return 1011 \_/
Example:

to*binary(1) /* should return 1 _/
to_binary(5) /_ should return 101 _/
to_binary(11) /_ should return 1011 \_/

### Solution

function toBinary(n){

##### here is very simple by using toString(2) Methode which converts the numbers to binary string but just because we need to return number not string, than we need to use function Number in front of the converting to binary.

    return Number(n.toString(2));;

}

### More about number.toString(2) Methode under url:

https://www.w3schools.com/jsref/jsref_number.asp - Number() function

https://www.w3schools.com/jsref/jsref_tostring_number.asp
number.toString(2) Method and expalanation values in the brackets

