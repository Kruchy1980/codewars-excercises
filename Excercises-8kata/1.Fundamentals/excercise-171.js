// Simple Fun #352: Reagent Formula

function isValid(formula) {
    //coding and coding..
    const rule1 = !(formula.includes(1) && formula.includes(2));
    const rule2 = !(formula.includes(3) && formula.includes(4));
    const rule3 = formula.includes(5) === formula.includes(6);
    const rule4 = formula.includes(7) || formula.includes(8);
    return rule1 && rule2 && rule3 && rule4;
}