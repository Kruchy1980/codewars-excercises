// Grasshopper - Bug Squashing

var health = 100
var position = 0
var coins = 0

function main() {
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth() //attack() was in here.
    printStatus()
}