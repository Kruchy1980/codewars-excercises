# Check the exam

The first input array contains the correct answers to an exam, like ["a", "a", "b", "d"]. The second one is "answers" array and contains student's answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer(empty string).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) → 0

### Solution

const checkExam = (array1, array2) => {

##### It is enough to use in here the reduce methode and ternary function with comparint the elements of arrays.

    const finalScore = array2.reduce((sum, array2, index) => {
    return (!array2) ? sum : (array2 === array1[index]) ? sum + 4
    : (array2 !== array1[index]) ? sum - 1
    : sum
    }, 0)
    return finalScore > 0 ? finalScore : 0

}
