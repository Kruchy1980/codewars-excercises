# Twice as old

Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

### Solution

function twiceAsOld(dadYearsOld, sonYearsOld) {

##### The trick in here is just to change places of years if the score is below 0

    return (dadYearsOld - (sonYearsOld _ 2)) >= 0 ? (dadYearsOld - (sonYearsOld _ 2)) : (sonYearsOld \* 2) - dadYearsOld ;

}
