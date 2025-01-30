
console.log("1-----")
console.log(teddy)

var teddy = "bear"
console.log(sing())

function sing(){
    console.log("Die with me")
}

var favouriteFood = "grapes"

var foodThoughts = function () {
    console.log("Original favourite food:" + favouriteFood)

    var favouriteFood = "sushi"

    console.log("New Favourite food"+ favouriteFood)
}

foodThoughts()