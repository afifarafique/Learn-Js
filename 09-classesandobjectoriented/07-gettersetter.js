class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email =value
    }
    get password(){
        return `${this._password}afifa`
    }
    set password(value){
        this._password = value.toUpperCase()
    }
}

const afifa = new User("abcd@gmail.com","567")
console.log(afifa.email);

//getter setter with properties

function User1 (email,password){
    this._email = email;
    this.password = password
}

Object.defineProperty(this, 'email', {
    get: function(){
        return this._email.toUpperCase()
    },
    set: function(value){
        this._email = value
    }
})
Object.defineProperty(this, 'password', {
    get: function(){
        return this._password.toUpperCase()
    },
    set: function(value){
        this._password = value
    }
})
const icecream = new User1("abcd@gmail.com", "icecream")
console.log(icecream.email);

//object_get_set

const User2 ={
    _email: 'hgty@gmail.com',
    _password: "fgh",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const icecream1= Object.create(User2)
console.log(icecream1.email);