## Reversed Strings

Complete the solution so that it reverses the string value passed into it.

## Solution

function solution(str){

# Using chining function firstly split the string to array of singular letters, than reverse the quay, later join the letters to full string

return str.split('').reverse().join('')
}
