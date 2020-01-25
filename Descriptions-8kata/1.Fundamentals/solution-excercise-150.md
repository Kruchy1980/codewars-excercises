# Exclusive "or" (xor) Logical Operator

Exclusive "or" (xor) Logical Operator
Overview
In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

false xor false == false // since both are false
true xor false == true // exactly one of the two expressions are true
false xor true == true // exactly one of the two expressions are true
true xor true == false // Both are true. "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
Task
Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

### Solution 1 - longer

function xor(a, b) {
// TODO: Program Me

##### Easy to use here ternary statement to solve the excercise. Just because we have used here the statement false so we need to write the results dependend of conditions

    return (a === false && b === false || a === true && b === true) ? false : true;

}

### Solutio 2 shorter - we do not need to use here else statement because we are checking the truth of condition firstly

function xor(a, b) {
// TODO: Program Me
return (a === true && b === false || a === false && b === true);
}
