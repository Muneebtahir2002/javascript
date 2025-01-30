// fucntion scope
// vs
// block scope

// if ( 5 > 4 ){
//     const secret = "123456"
// }

// secret // i camt access

function loop(){
    for( var i = 0; i < 5; i++ ){
        console.log(i)
    }
    console.log(" i got it",i)
}
loop()
function loop(){
    for( let i = 0; i < 5; i++ ){
        console.log(i)
    }
    console.log(" i got it",i)
}
loop()