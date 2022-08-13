let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20];

function aVeryBigSum(array) {
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        totalSum = array[i] + totalSum;
    }
    return totalSum;
}

console.log(aVeryBigSum(array))