// 101 Dalmatians - squash the bugs, not the dogs!

function howManyDalmatians(number) {
    return number <= 10 ? "Hardly any" :
        number <= 50 ? "More than a handful!" :
        number === 101 ? "101 DALMATIANS!!!" :
        "Woah that's a lot of dogs!";
};