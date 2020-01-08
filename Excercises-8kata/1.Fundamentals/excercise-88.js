// Logical calculator

function logicalCalc(array, op) {
    const logOp = {
        AND: (a, b) => a && b,
        OR: (a, b) => a || b,
        XOR: (a, b) => a !== b,
    }
    return array.reduce(logOp[op]);
}
