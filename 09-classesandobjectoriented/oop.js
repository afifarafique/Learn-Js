//Objects literals

const user ={
    username: "Afifa",
    loginCount: 4, 
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got User Details");
        console.log(this);
    }
}

console.log(user.username)
// console.log(user.getUserDetails());
console.log(this);

//Constructor function

// const promise1 = new Promise()                       //this (new) is contructor function
// const date = new Date()                                  //this (new) is contructor function


function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const user1 = new User("Afifa",15,true)
const user2 = new User("Rafi",13,false)

console.log(user1.constructor);
// console.log(user2);
