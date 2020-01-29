# Sum of Multiples

Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7) ==> "INVALID"

### Solution

function sumMul(n,m){

##### We need to consider two conditions in here one of them is that if min >= max the function should return 'INVALID'

    if (n >= m) return "INVALID";

##### else we need to use the for loop to iterate for each element from the range(n, m), and return sum of multiplying it by the min.

    let sum = 0;
    for (var i = n; i < m; i+=n) {
    sum += i;
    }
    return sum;

}

### More about for loop under url :

https://www.w3schools.com/jsref/jsref_for.asp - for statement
