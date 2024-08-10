class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class student extends User{
    constructor(username,password,email){
        super(username)
        this.email = email
        this.password = password
    }

    takeCourse(){
        console.log(`A course is taken by ${this.username}`);
    }
}

const st = new student("Afifa","ghj@gmail.com","457");
st.takeCourse()

console.log(st instanceof student);
console.log(st instanceof User);