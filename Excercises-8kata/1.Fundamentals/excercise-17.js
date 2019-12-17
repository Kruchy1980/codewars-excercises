// Draw stairs

function drawStairs(n) {
    let space = ""
    for (let i = 1; i < n; i++)
        space = space + "I\n" + " ".repeat(i);
    return space + "I";
}