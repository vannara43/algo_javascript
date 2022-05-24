function checkUnique(str) {
    let set = new Set(str);
    if (set.size === str.length) return true;
    return false;
}

console.log(checkUnique("naruto"))