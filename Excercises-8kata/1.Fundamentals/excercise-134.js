// Twice as old

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return (dadYearsOld - (sonYearsOld * 2)) >= 0 ? (dadYearsOld - (sonYearsOld * 2)) : (sonYearsOld * 2) - dadYearsOld;
}