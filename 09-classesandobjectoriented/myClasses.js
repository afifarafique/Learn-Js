
class User {
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}fghj`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const tea = new User("tea","abcd@gmail.com","456")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());