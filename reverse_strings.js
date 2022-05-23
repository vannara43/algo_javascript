//reverse string 
//you are given a string
//reverse it
//example: apple === elppa

//method 1
const revString = (str) => {
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    console.log(str);
}

revString("apple");