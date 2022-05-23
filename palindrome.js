//find palindrome
//example: abba === abba or hannah or hannah
//should return true or false
//step1: reverse the string
//step2: check w/ original if they are same

//method 1
let palindrome = (str) => {
    const isPalindrome = str.split("").reverse().join("")
    console.log(str === isPalindrome)
}

palindrome("hannah");

//method 2
(function (str) {
    let reversed = "";
    for (let x of str) {
        reversed = x + reversed;
    }
    console.log(str === reversed)
})("racecar")