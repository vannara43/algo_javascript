//return the sum of all array elements
//HackerRank Challenge

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20];
let array2 = [40, 200, 30, 40, 50, 60, 70, 80, 90, 1000, 105, 220];
let array3 = [-1000, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200];
let array4 = [100000, 20000, 3000, 4000, 5000000, 60000, 700000, 80000, 9000000, 1000, 15000, 200000];

function aVeryBigSum(array) {
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        totalSum = array[i] + totalSum;
    }
    return totalSum;
}

console.log({
    Case1: aVeryBigSum(array1),
    Case2: aVeryBigSum(array2),
    Case3: aVeryBigSum(array3),
    Case4: aVeryBigSum(array4),
});