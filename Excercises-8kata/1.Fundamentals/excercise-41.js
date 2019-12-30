// Find the first non-consecutive number

function firstNonConsecutive(arr) {
    const result = arr.find((number, index) => number !== index + arr[0])
    return (result || result === 0) ? result : null
}