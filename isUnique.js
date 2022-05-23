//check to see if value is unique

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