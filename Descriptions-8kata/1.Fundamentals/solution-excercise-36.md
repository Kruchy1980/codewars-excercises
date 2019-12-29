# Keep Hydrated!

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

### Solution

function litres(time) {

### Here is enough to use Math.floor methode which returns number rounded to the bottom value always even if is 1.99 it will equal 1 only

    return Math.floor(time \* 0.5);

}

#### More information about Math.floor() methode is under that link:

https://www.w3schools.com/jsref/jsref_floor.asp
