// How many stairs will Suzuki climb in 20 years?

function stairsIn20(s) {
    return s.reduce((arr, day) => arr.concat(...day), []).reduce((days, i) => days + i, 0) * 20;
}