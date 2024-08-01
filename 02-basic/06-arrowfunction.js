const user = {
    username : "Afifa",
    price : 99,
    WelcomeMessage : function(){
        console.log(`${this.username},Welcome to Website`);
    }
}
user.WelcomeMessage()

const user1 = function(){
    let username = "Afifa"
    // console.log(this.username);
}
user1()

//Arrow function
const user2 = () =>{
    let username = "Afifa"
    // console.log(this.username);
}
user2()

const user3 =(num1,num2) => {
    return num1 + num2
}
console.log(user3(4,6));