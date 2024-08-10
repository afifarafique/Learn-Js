//Static properties

class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log( `Username: ${this.username}`);
    }
    createId(){
        return `567`
    }
}

const Afifa = new User("Afifa")
console.log(Afifa.createId());