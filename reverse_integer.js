//reverse the integer
//convert to string first
// turn into Array
// reverse method
// back to string
// back to int 

const reverseInt = (n) => {
    return parseInt(n.toString().split('').reverse('').join(''))
}

console.log({
    testcase1: reverseInt(52),
    testcase2: reverseInt(500),
    testcase3: reverseInt(-51),
    testcase4: reverseInt(-900),
});