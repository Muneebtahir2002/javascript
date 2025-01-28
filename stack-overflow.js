// stack overflow
function inception() {
    inception()
}

// garbage collection

var human = {
    first: "Muneeb",
    last: "tahir"
}

human = 5 ;

function humansubtract(){ 
    var human = {
        first: "Muneeb",
        last: "tahir"
    }
    human = 5 ;
}