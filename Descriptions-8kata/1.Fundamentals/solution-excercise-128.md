# Removing Elements

Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

Example:

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
None of the arrays will be empty, so you don't have to worry about that!

### Solution

function removeEveryOther(arr){

##### It is good to use here the arr.filter() method which reeturns new atrray with filtered elements

    return arr.filter((el,i) => i%2===0 ? el: 0 );

}

### More about arr.filter() methone under url:

https://www.w3schools.com/jsref/jsref_filter.asp - array.filter() method
