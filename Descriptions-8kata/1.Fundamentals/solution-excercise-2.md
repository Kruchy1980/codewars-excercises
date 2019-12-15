## Remove String Spaces

Simple, remove the spaces from the string, then return the resultant string.

// function is being given with parameter x as string
function noSpace(x){
    // firstly with methode split() we are changing the string into array of substrings, and later by using methode join() we are returning the earlier created array of substrings as a string
return x.split(' ').join('')
}





### More about split and join csn be found here:
https://www.w3schools.com/jsref/jsref_split.asp  - for split
https://www.w3schools.com/jsref/jsref_join.asp -  for join