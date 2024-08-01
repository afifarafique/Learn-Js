//Objects
//There are two ways to declare objects "Literals" and "constructor"
//there is also a concept of singleton (means when we create it with constructor)

//Objects Literals

const user = {
    name :"Afifa",
    age : 17,
    location : "karachi",
    email : "abcdef@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","wednessday"],
}

console.log(user.email)

//There is another way to access it
console.log(user["email"])

//Object freeze
user.email = "abcdef@gmail.com"
// Object.freeze(user)
user.email = "defgh@gmail.com"
console.log(user);

user.greeting = function(){
       console.log("Hellow  user")
 }
 console.log(user.greeting());
console.log(user.greeting);

user.greetingtwo = function(){
console.log(`Hellow  user,${this.name}`);
}
console.log(user.greetingtwo());



                                       //Video 17//
//Objects
//const user1 = new Object()
const user1 = {}

user1.id = "567acg",
user1.name = "Afifa",
user1.isLoggedIn = false

console.log(user1);



//objects into  object
const user2 = {
    email : "fghjk@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Afifa",
            lastname : "Rafi",
        }
    }
}

console.log(user2.fullname);
console.log(user2.fullname.userfullname);
console.log(user2.fullname.userfullname.firstname);



const obj1 = {1:"A", 2:"B"}
const obj2 = {3:"C", 4:"D"}

// const obj3 = {user3 , user4}
//const obj3 = Object.assign({},obj1 ,obj2)
//but latest and easy syntax for this purpose is
const obj3 = {...obj1, ...obj2}
console.log(obj3);


//syntax for when value comes from database 
const users = [
    {
        id : 1,
        email : "dfghj@gmail.com",
    },
    {
        id : 1,
        email : "dfghj@gmail.com",
    }, 
    {
        id : 1,
        email : "dfghj@gmail.com",
    },
]

users[2].email
console.log(user1);
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));
console.log(Object.hasOwnProperty('isLoggedIn'));



                //video18  objects de-structure and Json API
  //  object  de-structure
const course = {
    coursename : "Front-end",
    price : 999,
    courseInstructor : "Ayesha",
}
const {courseInstructor} = course
console.log(courseInstructor);


//API Concepts
//API in objects form
// {
//     "name" : "Afifa",
//     "coursename" : "Front-end",
//     "Price" : "free",
// }


 



























