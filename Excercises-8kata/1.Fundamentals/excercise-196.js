// Fun with ES6 Classes #1 - People, people, people


class Person {
    // Get coding in ES6 :D
    //   Constructor with initial values
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
            //   Assign/copy the enumerate own properties to the target object from source object, and returns the target object 
            Object.assign(this, {
                firstName,
                lastName,
                age,
                gender
            })
        }
        //   Name display method
    sayFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        //  And the static method which accepts raceName parameters and displays it in the sentence
    static greetExtraTerrestrials(raceName) {
        return `Welcome to Planet Earth ${raceName}`;
    }
}