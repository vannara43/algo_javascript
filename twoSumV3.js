//array: [3,5,-4,8,11,1,-1,6]
//target: 10
//output: [-1,11]

//time complexity: O(N^2)
//Space Complexity: O(1)

//two pointer method
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20];

function twoSum(array, target) {
    let i = 0;
    let j = array.length - 1;
    array = array.sort((a, b) => a - b);

    while (i < j) {
        let sum = array[i] + array[j];

        if (sum === target) {
            return [array[i], array[j]];
        } else if (sum < target) {
            i++;
        } else if (sum > target) {
            j--
        }
    }
}

console.log("two pointer method :", twoSum(array, 18));

//edge cases

//big O, the amount of time it iterate through to find a solution, the time it takes function to process, the space complexity increases

//O(1) is constant time
//O(N) if array, 1 array = 1 sec, if 2 arr then 2 sec
//O(N^2) quadratic time