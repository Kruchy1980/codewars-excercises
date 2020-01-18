# Are You Playing Banjo?

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo"
name + " does not play banjo"
Names given are always valid strings.

### Solution

function areYouPlayingBanjo(name) {
// Implement me

##### Usage of template strings is only the one solution but for me looks good beside we need to check what letter name starts and it can be writtel lower or upperCase letter so we can change the letter to one only dimension i choose lowerCase() methode.

    return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;

}


### More about toLowerCase methode under url:

