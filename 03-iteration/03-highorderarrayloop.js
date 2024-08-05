//for of loop

const array =[1,2,3,4,5]

for (const value of array) {
    console.log(value);
}


const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each Char is ${greet}`);
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

for(const [key,value]of map){
    console.log(key,':-',value);
}



const newObj ={
    name1 :"Afifa",
    name2 :"Api",
}
for (const key in newObj) {
    console.log(`Name is ${newObj[key]}`);
}



const name1 = ["Afifa", "Api", "Mama", "Dad"]

for (const key in name1) {
    console.log(name1[key]);
}

 