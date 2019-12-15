//Well of Ideas - Easy Version

function well(x) {
    const count = x.reduce((b, g) => b + (g == 'good'), 0);
    return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}