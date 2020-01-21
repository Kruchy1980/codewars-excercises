// Training JS #32: methods of Math---round() ceil() and floor()

function roundIt(n) {
    let numb = n.toString().split('.')
    return (numb[0].length < numb[1].length) ? Math.ceil(n)
        : (numb[0].length > numb[1].length) ? Math.floor(n)
            : Math.round(n);;
}