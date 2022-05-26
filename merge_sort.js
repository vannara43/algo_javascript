// Merge Sort Implentation (Recursive)
//two functions
//need middle, left, right for function 1

array = [2, 5, 3, 4, 1, 6]
console.log("Length of array is", array.length)


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
            console.log(leftIndex, "left")
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
            console.log(rightIndex, "right")
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

console.log(mergeSort(array))