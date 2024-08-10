function setUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const icecream = new createUser("icecream","abcd@gmail.com","456")
console.log(icecream);