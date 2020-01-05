// How good are you really?

function betterThanAverage(classPoints, yourPoints) {
    return classPoints.reduce((p, n) => p + n, 0) / classPoints.length < yourPoints;
}