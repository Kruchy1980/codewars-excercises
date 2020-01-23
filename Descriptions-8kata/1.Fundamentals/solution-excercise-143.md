# Grasshopper - Create the rooms

Escape the room
You are creating an escape the room game. The first step is create an object called rooms that contains all of the rooms of the game. The room object should have at least 3 rooms as properties, and each individial room should have at least three properties (example: name, description, completed).

### Solution - is to create simple object with three parameters wher each containes three other parameters itself.

// Add rooms here
const rooms = {
room1: {
name: 'one',
description: 'smth-one',
completed: false
},
room2: {
name: 'two',
description: 'smth-two',
completed: false
},
room3: {
name: 'three',
description: 'smth-three',
completed: false
}
};
