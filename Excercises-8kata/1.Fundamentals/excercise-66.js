// Total amount of points

function points(games) {
    return games.reduce((sumOfPoints, goals) => {
        return sumOfPoints += goals[0] > goals[2] ? 3
            : goals[0] === goals[2] ? 1
                : 0;
    }, 0)
}