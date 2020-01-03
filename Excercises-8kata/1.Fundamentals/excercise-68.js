// Check the exam

const checkExam = (array1, array2) => {
    const finalScore = array2.reduce((sum, array2, index) => {
        return (!array2) ? sum : (array2 === array1[index]) ? sum + 4
            : (array2 !== array1[index]) ? sum - 1
                : sum
    }, 0)
    return finalScore > 0 ? finalScore : 0
}