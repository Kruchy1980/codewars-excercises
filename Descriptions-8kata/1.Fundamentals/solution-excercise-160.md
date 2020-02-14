# Basic subclasses - Adam and Eve

According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

### Solution

##### the problem here is that it is only the Object Oriented Programming OOP

##### Main class God

class God{

##### Contains static method

static create(){

##### Which returns new Man and new Woman

return [new Man, new Woman]
}
}

##### Main class Human which includes subclasses

class Human {}

##### Of new man

class Man extends Human {}

##### of new woman

class Woman extends Human {}
