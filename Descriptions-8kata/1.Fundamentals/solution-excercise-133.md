# Hello, Name or World!

Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

hello "john" => "Hello, John!"
hello "aliCE" => "Hello, Alice!"
hello => "Hello, World!" # name not given
hello '' => "Hello, World!" # name is an empty String

### Solution

function hello(name) {

##### Just because the name should be case sensitive we need to use here the string first letter Capitalization made by string.toUpperCase() methode and the rest of name should be written with small letters so the rest of the name string should be string.toLowerCase() method used and string except of the first leter we can return by using string.slice() method

    return name ? 'Hello, ' + name[0].toUpperCase() + name.slice(1).toLowerCase() + '!' : 'Hello, World!';

}

### More about the used methodes under url:

https://www.w3schools.com/jsref/jsref_touppercase.asp - string.toUpperCase() Method

https://www.w3schools.com/jsref/jsref_slice_string.asp - string.slice() method

https://www.w3schools.com/jsref/jsref_toulowercase.asp - string.toLowerCase() Method
