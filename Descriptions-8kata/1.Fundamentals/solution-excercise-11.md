## Generate range of integers

Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

## Solution

function generateRange(min, max, step){

# firstly create empty array

let arr = [];

# than use for loop to set inteagers from range between min and mah increased by step

for (let i = min; i <= max; i+=step) {

# b4 return push every element to array

arr.push(i);
}

# finally return the whole array

return arr;
}
