//solve fizzbuzz

((num) => {
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            //check for 15
            console.log("fizzbuzz");
            ++i;
        }
        //check for 3
        if (i % 3 === 0) {
            console.log("fizz");
            ++i;
        }
        //check for 5
        if (i % 5 === 0) {
            console.log("buzz");
            ++i;
        }

        //check for 3 again
        if (i % 3 === 0) {
            console.log("fizz");
            ++i;
        }
        //else
        if (i > num) {
            break;
        } else {
            console.log(i)
        }
    }
})(45)