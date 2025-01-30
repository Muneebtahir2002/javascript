// lexical environment global
const printName = () =>{
    return "Muneeb"
}

const MyName = () =>{
    function a() {  // lexical environment 

    }
    return printName()
}

window.MyName() 