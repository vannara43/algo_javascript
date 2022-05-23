//reverse the integer
//convert to string first
// turn into Array
// reverse method
// back to string
// back to int 

const reverseInt = (n) => {
    return parseInt(n.toString().split('').reverse('').join(''))
}

console.log(reverseInt(21));