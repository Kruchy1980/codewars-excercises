// L1: Set Alarm

function setAlarm(employed, vacation) {
    return (employed === true && vacation === false) ? true : false;
}


// Shorter version

function setAlarm(employed, vacation) {
    return (employed && !vacation) ? true : false;
}