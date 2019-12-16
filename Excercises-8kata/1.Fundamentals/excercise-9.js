// The Wide-Mouthed frog!

// 1 Solution

function mouthSize(animal) {
    return (animal.toLowerCase() === 'alligator') ? 'small' : 'wide'
}

//2 Solution

function mouthSize(animal) {
    if (animal.toLowerCase() === 'alligator') {
        return 'small'
    } else {
        return 'wide'
    }
}