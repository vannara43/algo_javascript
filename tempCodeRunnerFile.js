(function (str) {
    let reversed = "";
    for (let x of str) {
        reversed = x + reversed;
    }
    console.log(str === reversed)
})("racecar")