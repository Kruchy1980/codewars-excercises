// Will there be enough space?

function enough(cap, on, wait) {
    let res = ((on + wait) - cap)
    return res >= 0 ? res : 0;
}
