# Even or Odd

Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

### Solution

function even_or_odd(number) {

##### Use Modulo to solve the problem

    return (number % 2 === 0) ? 'Even' : 'Odd';

}
