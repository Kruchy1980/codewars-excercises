//Abbreviate a Two Word Name

function abbrevName(name) {
    return name.split(' ').map(el => el.substring(0, 1).toUpperCase()).join('.');
}