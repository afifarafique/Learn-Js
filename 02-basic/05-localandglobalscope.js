
//Any thing written in this if function is block scope and on the other hand anything written in outside this is global scope

let a = 200
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("INNER:",a)
}
console.log(a);
// console.log(b);
console.log(c);

//nested scope
function one() {
   const username ="Afifa"

   function two() {
    const website = "youtube"
    console.log(username);
   }
//    console.log(website);
     two()

}

   one()

   //now doing it with if else

if(true){
    const username = "Afifa"
    if(username === "Afifa"){
        const website = "youtube"
        console.log(username  +  website);
    }
    // console.log(website);        //the error occurs bacuase we are calling it outside the function 
}
// console.log(username)             //the error occurs bacuase we are calling it outside the function 

//hoisting

addTwo(4)
const addTwo =function(num){
    return num + 2
}
