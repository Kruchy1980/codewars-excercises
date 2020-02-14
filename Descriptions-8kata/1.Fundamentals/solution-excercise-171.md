# Simple Fun #352: Reagent Formula

Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

We know the rules of confect:

material1 and material2 cannot be selected at the same time
material3 and material4 cannot be selected at the same time
material5 and material6 must be selected at the same time
material7 or material8 must be selected(at least one, or both)
Task
You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

Example
For formula = [1,3,7], The output should be true.

For formula = [7,1,2,3], The output should be false.

For formula = [1,3,5,7], The output should be false.

For formula = [1,5,6,7,3], The output should be true.

For formula = [5,6,7], The output should be true.

For formula = [5,6,7,8], The output should be true.

For formula = [6,7,8], The output should be false.

For formula = [7,8], The output should be true.

Note
All inputs are valid. Array contains at least 1 digit. Each digit appears at most once.

Happy Coding ^\_^

### Solution

function isValid(formula){

<!-- //coding and coding.. -->

##### It is necessary to prepare rules for formula dependend of given rules so rule no1: material1 and material2 cannot be selected at the same time

    const rule1 = !(formula.includes(1) && formula.includes(2));

##### rule no2: material3 and material4 cannot be selected at the same time

    const rule2 = !(formula.includes(3) && formula.includes(4));

##### rule no3: material5 and material6 must be selected at the same time

    const rule3 = formula.includes(5) === formula.includes(6);

##### rule no4: material7 or material8 must be selected(at least one, or both)

    const rule4 = formula.includes(7) || formula.includes(8);

##### And finally we are checking if all of the rules are satisfied - remember that array.includes() returns boolean values which we need

    return rule1 && rule2 && rule3 && rule4;

}

### More about array.includes() method under url:

https://www.w3schools.com/Jsref/jsref_includes_array.asp
