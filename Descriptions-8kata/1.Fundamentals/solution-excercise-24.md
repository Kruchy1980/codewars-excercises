# Expressions Matter

With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 _ (2 + 3) = 5
1 _ 2 _ 3 = 6
1 + 2 _ 3 = 7
(1 + 2) \* 3 = 9
So the maximum value that you can obtain is 9.

The numbers are always positive.
The numbers are in the range (1  ≤  a, b, c  ≤  10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur .
You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) \* 2 = 8.

### Solution

function expressionMatter(a, b, c) {

#### To solve that problem I have used Math.max methode and needed to consider all conditions after what returned score equal to maximum

return Math.max(a + b + c, a \*_ (b + c), (a + b) \*_ c, a \* b \* c);
}

##### Morq about Math.max() methode will be found here:

https://www.w3schools.com/jsref/jsref_max.asp
