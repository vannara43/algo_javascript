//array: [3,5,-4,8,11,1,-1,6]
//target: 10
//output: [-1,11]

//time complexity: O(N^2)
//Space Complexity: O(1)
//method 1: nested for loops | quadratic time
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20];

//method twoSumV2
function twoSum(array, target) {
    let nums = {};
    for (const num of array) {
        console.log(num, "is num");
        const potentialMatch = target - num;
        if (potentialMatch in nums) {
            console.log(potentialMatch, "is potentialMatch");
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}

console.log("Two numbers that equal target is", twoSum(array, 28));