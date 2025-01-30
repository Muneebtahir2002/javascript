function two() {
    var isValid; // undefined
}

function one() {
    var isValid = true // locally true
    two()
}

var isValid = false; // globally false
one()