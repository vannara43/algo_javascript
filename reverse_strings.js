//reverse string 
//you are given a string
//reverse it
//example: apple === elppa

//method 1
const revString = (str) => {
    const arr = str.split("");
    arr.reverse();
    str = arr.join("");
    return str;
}

console.log(revString("apple"));

//method 2
// (function (str) {
//     let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed
//     }
//     console.log(reversed)
// })("Greetings!")

console.log({
    testcase1: revString("pine"),
    testcase2: revString("dina"),
    testcase3: revString("tangy"),
    testcase4: revString("eggo"),
});

console.log(
    ["testcase1:", revString("pine")],
    ["testcase2:", revString("dina")],
    ["testcase3:", revString("tangy")],
    ["testcase4:", revString("eggo")],
);