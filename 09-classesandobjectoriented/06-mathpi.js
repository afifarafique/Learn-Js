const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

const icecream  ={
    name :'strawbwerry icecream',
    price : 299,
    isAvailable : true,

    orderIcecream: function(){
        console.log("icecream is not ready");
    }
}
console.log(Object.getOwnPropertyDescriptor(icecream, "name"));

Object.defineProperty(icecream,'name',{
     //writable : false,
     enumerable :true,
})
console.log(Object.getOwnPropertyDescriptor(icecream, "name"));

for (const [key,value] of Object.entries(icecream)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}