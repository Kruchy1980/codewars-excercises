# Opposites Attract

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

### Solution

function lovefunc(flower1, flower2){

##### The simple ternary statemt is good to use in here but we need consider two cases and with it will help us the logical operators 'and' and 'or'.

    return (flower1%2===0 && flower2%2===1 || flower2%2===0 && flower1%2===1);

}

### More about operarors in javascript under url:

https://www.w3schools.com/jsref/jsref_operators.asp - operators in JavaScript
