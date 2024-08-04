// if(condition){

// }

if(3==3){
    console.log("True");
}

const temp =41
if(temp < 50){
    console.log("less than 50")
}
console.log("greater than 50")

//== ,===,< ,> ,<= >=,!=

//nesting
const marks = 750
if(marks < 1000){
    console.log("A");
} else if(marks < 800){
    console.log("B")
}else if(marks < 500){
    console.log("C")
}else 
console.log("F")

const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in ");
}


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const day = 7
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednessday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday");    

}


//falsy
//false, 0,-0,bigint 0n,"",undefined , NAN,

//Truthy
//"0",'false'," ",[] and {}, function(){}

const userEmail = ""
if(userEmail){
    console.log("got User email");
}else{
    console.log("dont have user email");
}


//nullish coalescing operator ??
//terniary operator ?:
const icecream = 180
icecream < 120 ? console.log("less than 120") : console.log("more than 120")











