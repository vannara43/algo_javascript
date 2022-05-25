//array: [3,5,-4,8,11,1,-1,6]
//target: 10
//output: [-1,11]

//method 1
function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [array[i], array[j]];
            }
        }

    }
}
//time complexity: O(N^2)
//Space Complexity: O(1)


array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20];
console.log("method 1: ", twoSum(array, 8));

//hash table is used to keep track of what you already seen
//method 2: using hash table
function twoSum2() {
    let nums = {};
    for (let i = 0; i < array.length; i++) {
        nums[i] = array[i];
    }
    return nums
}

console.log("method 2: ", twoSum2(array, 8));

//method 3
function twoSum3(array, target) {
    let nums = {};
    for (const num of array) {
        const potentialMatch = target - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}

console.log("method 3 :", twoSum3(array, 8));