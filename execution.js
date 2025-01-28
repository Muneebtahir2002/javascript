// global execution context
// gives window and this 
const printName = () =>{
    return "Muneeb"
}

const MyName = () =>{
    return printName()
}

MyName() 

