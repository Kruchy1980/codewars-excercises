# Reversed sequence

Get the number n (n>0) to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]

### Solution

const reverseSeq = n => {

###### It is easy to use for loop to solve this excerise . Firstly we need to declare empty array

    let array = [];

##### Than use the for loop with decremential i

    for (i = n;i>0;i--) {

##### Result for each executed add to array

    array.push(i);
    }

##### Ad finally return the created array

    return array;

};

### More abour array.push() methode under url:

https://www.w3schools.com/jsref/jsref_push.asp - array.push() method
