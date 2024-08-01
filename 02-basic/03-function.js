//Functions and Parameters

//Functions
function myname() {
    console.log("A");
    console.log("F");
    console.log("I");
    console.log("F");
    console.log("A");
}
myname()

function addTwoNumbers (number1,number2) {
    let result = number1 + number2
    return result
}
const result = addTwoNumbers(5 , 6)
console.log("Result:", result);

//parameters

function loginMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}
console.log(loginMessage());



function loginMessage(username = "Afifa"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return`${username} just logged in`
}
console.log(loginMessage());

