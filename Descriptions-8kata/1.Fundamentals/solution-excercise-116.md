# What's up next?

Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"

### Solution

function nextItem(xs, item) {

##### here i good to use another way the for loop. On the beginning declare not found element as found = false

    let found = false

##### Declare result without any value

    let finalValue

##### Create for loop which checks if element - here 'i' is in the array - here xs

    for (let i of xs) {

##### now conditional statement whih checks if found is false - because was declarea as false

    if (found) {

##### Than result is equal to element of index 'i' in array

    finalValue = i
    break
    }

##### but if index is equal to given item, than change found to true

    if (i === item) found = true
    }

##### Finally return result

    return finalValue

}

### More about for ... of loop under url:

https://www.w3schools.com/jsref/jsref_forof.asp - for...of loop statement
