//heap sort //broke

array = [2, 5, 3, 4, 1, 6, 10, 7, 20, 8, -2, -1, -5]
console.log("Length of array is", array.length)

function heapify(list, size, index) {
    let largest = index;
    let left = index * 2 + 1;
    let right = left + 1;
    if (left < size && list[left] > list[largest]) {
        largest = left;
    }
    if (right < size && list[right] > list[largest]) {
        largest = right;
    }
    if (largest !== index) {
        [list[index], list[largest]] = [list[largest], list[index]];
        heapify(list, size, largest);
    }
    return list;
}

function heapsort(list) {
    const size = list.length;
    let index = ~~(size / 2 - 1);
    let last = size - 1;
    while (index >= 0) {
        heapify(list, size, --index);
    }
    while (last >= 0) {
        [list[0], list[last]] = [list[last], list[0]];
        heapify(list, --last, 0);
    }
    return list;
}

console.log(heapsort(array));