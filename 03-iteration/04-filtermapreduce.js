const newCode=["js","ruby","java","python","php"]

const programing = newCode.forEach((item) =>{        
     console.log(item);                             //it not return values
     return item
})
console.log(programing);


//now we understand this example with numbers 
const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNum = numbers.filter((num) => num >4)

//doing this with forEach

const newNum =[]
numbers.forEach((num) =>{
     if (num > 4) {
          newNum.push(num)
     }
})
console.log(newNum);


//filter

const books =[
     {title : 'book one', genre :'science', publish :2004, edition :1991},
     {title : 'book two', genre :'History', publish :2006, edition :2009},
     {title : 'book three', genre :'Fiction', publish :2007, edition :1993}, 
     {title : 'book four', genre :'Non-Fiction', publish :2009, edition :2014},
     {title : 'book five', genre :'science', publish :2003, edition :1996},
     {title : 'book six', genre :'History', publish :2002, edition :2006},
     {title : 'book seven', genre :'History', publish :2006, edition :1995},
]

let newBooks =books.filter((bk) => bk.genre === 'History')
newBooks =books.filter((bk) => {
     return bk.edition >= 2000 && bk.genre === "History"})
console.log(newBooks);