## Well of Ideas - Easy Version

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
#    // For these problem we can use reduce methode which reduces the array to single value, executes a provided function for each value of the array (from left to right), which value is stored in an accumulator (result/total) and the methode does not change the original array
  const count = x.reduce((b, g) => b + (g == 'good'), 0);
# Now we can use the double ternary operator  which works as if else conditional function and can be chained as well what can make our code much shorter. 
  return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}




## More information about used functions are here:
https://www.w3schools.com/jsref/jsref_reduce.asp - for reduce methode
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator - ternary operation