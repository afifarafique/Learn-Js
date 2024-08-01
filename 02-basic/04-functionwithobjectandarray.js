function CartPrice(...num1){
    return num1
}
console.log(CartPrice(400,300))

//creating object

const user = {
    username : "Afifa",
    price : 999
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)

//we can do this like this 
handleObject({
    username :"Afifa",
    price : 999
})

//now we can do this with arrays

const newArray = [300,500,200]

function retunSecondValue(getArray){
    return getArray[2]
}
console.log(retunSecondValue(newArray));

