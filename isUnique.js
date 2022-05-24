//check to see if value is unique

//method 1
const isUnique = (str) => {
    const obj = {};

    //count the characters
    for (let i of str) {
        (!obj[i]) ? obj[i] = 1 : obj[i]++;
    }

    //return true or false
    for (let i in obj) {
        if (obj[i] > 1) {
            return false;
        }
    }
    return true;
}

console.log({
    IsUnique: isUnique("naruto")
})

//method 2
function checkUnique(str) {
    let set = new Set(str);
    if (set.size === str.length) return true;
    return false;
}

console.log(checkUnique("naruto"))