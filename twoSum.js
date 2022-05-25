//array: [3,5,-4,8,11,1,-1,6]
//target: 10
//output: [-1,11]

//time complexity: O(N^2)
//Space Complexity: O(1)
//method 1: nested for loops | quadratic time
function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [array[i], array[j]];
            }
        }

    }
}


array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20];
console.log("method 1: ", twoSum(array, 8));

//hash table is used to keep track of what you already seen
//using hash table
function twoSum2() {
    let nums = {};
    for (let i = 0; i < array.length; i++) {
        nums[i] = array[i];
    }
    return nums
}

console.log("hash table: ", twoSum2(array, 8));

//method 2
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

console.log("method 2 :", twoSum3(array, 8));

//two pointer method
function twoSum4(array, target) {
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

console.log("two pointer method :", twoSum4(array, 18));

//edge cases

//big O, the amount of time it iterate through to find a solution, the time it takes function to process, the space complexity increases

//O(1) is constant time
//O(N) if array, 1 array = 1 sec, if 2 arr then 2 sec
//O(N^2) quadratic time