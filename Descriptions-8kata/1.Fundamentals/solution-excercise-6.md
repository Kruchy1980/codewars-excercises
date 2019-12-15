## Count the Monkeys!

You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

## Solution

function monkeyCount(n) {

# // First we need to declare empty array to fill it with numbers declared in function

let count = [];

# //Than thanks to for loop we can iterate all the numbers in range of 1-n

for (let i = 1; i <= n; i++) {

# // Than we push the numbers to empty array and theoretically that is it

count.push(i);}

# // just one thing is to return our array later because if we will use return earier our loop will be finished after one circle only so our array would not be complete

return count;
}
