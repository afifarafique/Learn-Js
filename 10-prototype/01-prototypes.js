function multipleBy4(num){
    return num * 3
}
multipleBy4.power = 4

console.log(multipleBy4(4));
console.log(multipleBy4.power);
console.log(multipleBy4.prototype);


function User(username,score){
    this.username = username
    this.score = score
}
User.prototype.increment = function(){
    this.score++
}
User.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}
const icecream = new User("icecream",180)
const coldcoffee = new User("coldcoffee",280)

icecream.printMe()


let name = ["Afifa","Ayesha"]

let namepower ={
    Afifa :"food",
    Ayesha : "milk",

    getAfifapower : function(){
        console.log(`Afifa power is ${this.Afifa}`);
    }
}

Object.prototype.Afifa = function(){
    console.log(`Afifa is in all objects`);
}
Array.prototype.helloAfifa = function(){
    console.log(`Afifa say hello`);
}

name.Afifa()
name.helloAfifa()
// namepower.helloAfifa()



//inheritance

const user = {
    name: "Afifa",
    email: "abcde@gmail.com"
}
const student = {
    makeVideo : true
}
const studentSupport = {
    isAvailable : false
}
const stSupport = {
    makeassigment : 'english',
    fullTime : true,
    __proto__: studentSupport

}

student.__proto__ = User


//modernsyntax

Object.setPrototypeOf(studentSupport,student)


let anotherusername = "Rafi"
String.prototype.trueLength = function(){
    console.log(`${this}`);
}

anotherusername.trueLength()
"Afifa".trueLength()
"juice".trueLength()