## Draw stairs

given a number n, draw stairs with 'I' n tall and n wide, with the tallest in the top left. Example (with - to represent spaces; DO NOT USE THEM IN THE SOLUTIONS! USE SPACES IN SOLUTION! the "-"s are for clarity.): draw_stairs(3) == '''I\n_I\n\_\_I'''

## Solution

function drawStairs(n) {

# Firstly declare empty string

let space = ""

# later use for loop to consider all the numbers from range between 0 and 'n'

for(let i = 1; i < n; i++)

# Result of space is empty string plus stair= 'I\n' with next line mark plus empty string executed as many times as the loop is executed

space = space + "I\n" + " ".repeat(i);

# the final result is to on the end of every space add an "I"

return space + "I";
}

## More information about .repeat() methode is under that link:

https://www.w3schools.com/jsref/jsref_repeat.asp
