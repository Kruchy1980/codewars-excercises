// Who is going to pay for the wall?

def who_is_paying(name)
[name, name[0, 2]].uniq
end

// Mine original solution
function who_is_paying(name) {
    return name.length <= 2 ? [name] : [name, name.substr(0, 2)];
}