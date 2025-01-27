// inline chaching 
function findUser  (user){
    return ` found ${user.firstName} ${user.lastName}`
} 

const userData = {
    firstName: 'muneeb',
    lastName: 'Tahir',
}

findUser(userData)
// hidden classes
function Animal(x,y) {
    this.x = x;
    this.y =y;
}

const obj1 = new Animal(1,2)
const obj2 = new Animal(3,4)

obj1.x = 30;
obj1.y = 100;
obj2.y = 100;
obj2.x = 30;
// arguments 
function arguments (x,y) {
    if(arguments.length < 2 ) b = 5;
}
function arguments ( x , y ){
    if(arguments.length < 4 ) x = 6
}