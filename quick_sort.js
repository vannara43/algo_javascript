array = [1, 5, 8, 2, 3, 9, 7, 6, 4, 10, 15, 12, 20]

function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array[0];

    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
};

console.log(quicksort(array));