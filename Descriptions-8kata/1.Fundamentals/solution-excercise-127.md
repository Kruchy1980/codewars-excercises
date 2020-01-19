# Parse nice int from char problem

Ask a small girl - "How old are you?". She always says strange things... Lets help her!

For correct answer program should return int from 0 to 9.

Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

### Solution

function getAge(inputString){

##### With function Number we can easily return the age i number type required in this excercise.

    // return correct age (int). Happy coding :)
    return Number(inputString[0]);

}

### More about Number() function under url:

https://www.w3schools.com/jsref/jsref_number.asp - Number() function
