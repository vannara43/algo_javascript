let array = [2, 5, 3, 4, 1, 6, 10, 7, 20, 8, -2, -10];
console.log("Length of array is", array.length);

function quickSort(array) {
    if (array.length <= 1) {
        console.log("Looped")
        return array;
    }
    let pivot = array[0];
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i])
            console.log("Pivot:", [pivot], "pushed to left :", [array[i]])
        } else {
            right.push(array[i])
            console.log("Pivot:", [pivot], "pushed to right :", [array[i]])
        }
    }
    let result = [...quickSort(left), pivot, ...quickSort(right)];
    return result;
}

console.log(quickSort(array));