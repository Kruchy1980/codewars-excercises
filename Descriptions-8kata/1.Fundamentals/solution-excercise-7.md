## The 'if' function

Who likes keywords? Nobody likes keywords, so why use them?

You know what keyword I use too much? if! We should make a function called \_if, with its arguments as a logical test and two functions/lambdas where the first function is executed if the boolean is true, and the second if it's false, like an if/else statement, so that we don't have to mess around with those nasty keywords! Even so, It should support truthy/falsy types just like the keyword.

## 1 Solution

function \_if = (bool, func1, func2) => {

# //we are using simple if condition taking as condition value of bool - do not need to make the variable bool equal to anything because it is automatically consider as be true

if (bool) {
return func1()

# //Second condition appeares in any other condition that is why there is no need to write anything in bravkets

} else {
return func2()
}
}// main function closing curly brqckets

## 2 Solution

function \_if(bool, func1, func2) { # We have used ternary condition to solve the same task in shorter way a well
return bool ? func1() : func2()
}

## More information about if statement cn be found here:

https://www.w3schools.com/js/js_if_else.asp
