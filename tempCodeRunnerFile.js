function twoSum(array, target) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                console.log(array[i], array[j])
                return [array[i], array[j]];
            }
        }

    }
}

array = [1, 2, 3, 4, 5, 6, 7, 8];
twoSum(array, 10);