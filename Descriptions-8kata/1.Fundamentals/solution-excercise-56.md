# Wilson primes

Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P \* P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.

### Solution

function amIWilson(p) {

##### Just because the only known Wilson's primes are the numbers inside the array in here so anythime if p will be equal to one of these so for every p as index is equal more than -1 so from 0 to 2 in here they will be william's primes :)

    return [5, 13, 563].indexOf(p) > -1

}

###### Other solution can be as below

function amIWilson(p) {
return p === 5 || p === 13 || p === 563
}
