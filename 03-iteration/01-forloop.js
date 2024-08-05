//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("True")
    }
    console.log(element);
}


for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value:${i}`);
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner loop value ${j} and inner loop${i}`);
       console.log(i + '*' + j + '=' + i*j);
    }
    
}

let newArray =["Afifa","Mama","DAD"]
for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
    console.log(element);
}



//break and continue

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${i}`);   
}

//Continue
for (let j = 1; j <= 10; j++) {
    if (j == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${j}`);   
}