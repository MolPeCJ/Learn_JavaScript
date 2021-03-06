// Бинарный поиск элемента в массиве 

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;

    while (start <= end) {
        count += 1;
        middle = Math.floor((start + end) / 2);

        if (array[middle] === item) return middle;

        if (item < array[middle]) {
            end = array[middle] - 1;
        } else {
            start = array[middle] + 1;
        }
    }
}

console.log(`\nЦифровой индекс массива: ${binarySearch(array, 7)}`);
console.log(`Количество итераций: ${count}\n`);