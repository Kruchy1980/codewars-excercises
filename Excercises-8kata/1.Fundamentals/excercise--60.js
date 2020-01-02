// Count of positives / sum of negatives


function countPositivesSumNegatives(input) {
    if (!input || !input.length) return []

    let sumP = input.filter(p => p > 0),
        sumN = input.filter(n => n <= 0)

    return [sumP.length, (sumN.reduce((el, i) => el + i, 0))]
}