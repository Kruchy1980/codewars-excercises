// Is there a vowel in there?

function isVow(a) {
    return a.map(el => /[aeiou]/.test(String.fromCharCode(el)) ? String.fromCharCode(el) : el)
}