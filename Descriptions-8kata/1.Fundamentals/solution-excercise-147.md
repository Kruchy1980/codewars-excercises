# Beginner Series #2 Clock

Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

Your task is to make 'Past' function which returns time converted to miliseconds.

##### Example:

past(0, 1, 1) == 61000
Note! h, m and s will be only Natural numbers! Waiting for translations and Feedback! Thanks!

### Solution

function past(h, m, s){

##### Simple mathematical action is need to know that hours = 3600000 ms, minutes = 60000 ms, second = 1000 ms.

    //#Happy Coding! ^\_^
    return h*3600000 + m*60000 + s\*1000;

}
