# Invert values

### Solution

function invert(array) {

##### The easiest way in this excercise is to use map() methode which creates new array after executes defined action on every array elements separately.

    return array.map(el => el \* -1)
    }
