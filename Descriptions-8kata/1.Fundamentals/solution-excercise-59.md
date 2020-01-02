# Correct the mistakes of the character recognition software

Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

### Solution

function correct(string){

##### Here is simply used string.replace() methode which searches a string for a specified value or regular Expression (shich we used here) and returns the new string.

###### In regular expression we can use the 'g' flah which means that it concern all the marks there is need to exchange but if we will use not the regEx than the only first mark will be replaced not the second.

    return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');

}

### More about string.replace() methode under url:

https://www.w3schools.com/jsref/jsref_replace.asp
