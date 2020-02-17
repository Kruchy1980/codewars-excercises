// Multiplication table for number

function multiTable(n) {
    return [...Array(10)].map((el, i) => `${i + 1} * ${n} = ${n * i + n}`).join('\n')
}