//map
const number = [1,2,3,4,5,6,7,8,9,10]
// const newNums = number.map((num)=> {return num + 10}) 
const newNums = number.map((num) => num * 10 ).map( (num) => num + 1).filter( (num) => num >= 40)
               
console.log(newNums);


const num = [1,2,3]
// const total = num.reduce(function(accumulator,currentvalue){
//     console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`);
//     return accumulator + currentvalue
// },0)

//doing this same example with arrow function

const total = num.reduce((acc,curr) => acc + curr ,0)
console.log(total);


//another example
const cart = [
    {
        itenNmae : 'Shampoo',
        price : 999
    },
    {
        itenNmae : 'Soap',
        price : 899
    },
    {
        itenNmae : 'Facewash',
        price : 799
    },
    {
        itenNmae : 'Cleanser',
        price : 699
    },
]

const totalAmount = cart.reduce((acc,item) => acc + item.price,0)
console.log(totalAmount);

