// Thinkful - Logic Drills: Traffic light

function updateLight(current) {

    //your code here!
    return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';
}