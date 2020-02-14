// Holiday VI - Shark Pontoon

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    return dolphin && sharkDistance / (sharkSpeed / 2) >= pontoonDistance / youSpeed || !dolphin && sharkDistance / sharkSpeed >= pontoonDistance / youSpeed ? 'Alive!' : 'Shark Bait!';
}