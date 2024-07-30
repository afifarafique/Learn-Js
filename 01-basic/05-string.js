//String methods
const name = "Afifa"
const repo = 30

// console.log(name + repo + "repo");

const gameName =  new String("Afifa")
console.log(gameName[2]);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('f'));

const newString = gameName.substring(0,2)
console.log(newString)

const anotherString = gameName.slice(-4,2)
console.log(anotherString);

//trim example
const newvalue1 = "    Afifa    "
console.log(newvalue1);
console.log(newvalue1.trim());



const url = "https://Google.com/Google%20"
console.log(url.replace('%20','-'));

//Split method
console.log(gameName.split('-'));

