array = [2, 5, 3, 4, 1, 6, 10, 7, 20, 8, -2, -10]
console.log("Length of array is", array.length)

function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let pivot = array[0]; //first number in array, which is 1
    let left = []; //these are empty arrays to start
    let right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    // for (let i = 1; i < array.length; i++) {
    //     if (array[i] < pivot) {
    //         left.push(array[i])
    //         // console.log("Pivot:", [pivot], "pushed to left :", [array[i]])
    //     } else {
    //         right.push(array[i]);
    //         // console.log("Pivot:", [pivot], "pushed to right :", [array[i]])
    //     }
    // }
    let result = [...quickSort(left), pivot, ...quickSort(right)]
    return result;
};

console.log(quickSort(array));


function sortThis(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[0];
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return [...sortThis(left), pivot, ...sortThis(right)]
}

console.log(sortThis(array));