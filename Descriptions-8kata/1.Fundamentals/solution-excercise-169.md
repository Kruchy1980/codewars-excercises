# Beginner Series #1 School Paperwork

Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need.

Example:
paperwork(5, 5) == 25
Note! if n or m < 0 return 0! Waiting for translations and Feedback! Thanks!

### Solution

function paperwork(n, m) {

##### The only one condition is needed - one for each of quantity - rest is simple multiplying

    return (n <= 0 || m <= 0) ? 0 : n \* m;

}
