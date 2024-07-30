//Array
//array is object  , Js array are resizable  , js array are 
const array = [2,4,6,8,4]
console.log(array[1]);

const name = ["ayesha","Alizba"]

const array1 = (1,2,3,4,5)
console.log(array1[2]);


//Array method

array.push(3)
array.push(4)
// array.pop()
console.log(array);


array.unshift(1)
array.shift()
console.log(array);

console.log(array.includes(3));
console.log(array.indexOf(3));


//Slice &  Splice


console.log("A" ,array);
const array2 = array.slice(1,3)
console.log(array2);
console.log("B" ,array);

const array3 = array.splice(1,2)
console.log(array3);
console.log("C" ,array);



const name1 = ["ali","ayesha","ayeza"]
const name2 = ["kish","ahmed","umair"]
name1.push(name2);

console.log(name1);
console.log(name1[3][2]);

//we can use contact
const Name = name1.concat(name2)
console.log(Name);

//There is another easy operator than this is spread

const all_name = [...name1,...name2]
console.log(all_name);




console.log(Array.isArray("Afifa"))
console.log(Array.from("Afifa"))


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


