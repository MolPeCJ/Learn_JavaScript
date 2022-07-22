// Линейный поиск в массиве

let n = 11;

let array1 = [0, 982, 324, 21, 54, 85, 92, 1, 5, 3, 2];
let count1 = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count1 += 1;

        if (array[i] === item) return i;
    }
}

console.log(`\nЦифровой индекс элемента в массиве: ${linearSearch(array1, n)}`);
console.log(`Количество итераций: ${count1}\n`);

// Бинарный поиск в массиве

let array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count2 = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;

    while (start <= end) {
        middle = Math.floor((start + end) / 2);
        count2 += 1;

        if (array[middle] === item) return middle;

        if (item < array[middle]) {
            end = array[middle] - 1;
        } else {
            start = array[middle] + 1;
        }
    }
}

console.log(`\nЦифровой индекс элемента в массиве: ${binarySearch(array2, n)}`);
console.log(`Количество итераций: ${count2}\n`);

// Сортировка выбором

let array3 = [-1, 0, -5, 3, 2, 8, 9, 15, 2, 23, 12, 22];
let count3 = 0;

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) minIndex = j;

            count3 += 1;
        }

        let swap = array[i];
        array[i] = array[minIndex];
        array[minIndex] = swap;
    }

    return array;
}

console.log(`\nОтсортированный массив: ${selectionSort(array3)}`);
console.log(`Количество итераций: ${count3}\n`);

// Пузырьковая сортировка

let array4 = [-1, 0, -5, 3, 2, 8, 9, 15, 2, 23, 12, 22];
let count4 = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }

            count4 += 1;
        }
    }

    return array;
}

console.log(`\nОтсортированный массив: ${bubbleSort(array4)}`);
console.log(`Количество итераций: ${count4}\n`);

// Быстрая сортировка

let array5 = [-1, 0, -5, 3, 2, 8, 9, 15, 2, 23, 12, 22];
let count5 = 0;

function quickSort(array) {
    if (array.length <= 1) return array;

    let supportElementIndex = Math.floor(array.length / 2);
    let supportElement = array[supportElementIndex];
    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; i++) {
        count5 += 1;

        if (array[i] === supportElement) continue;

        if (array[i] < supportElement) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }

    return [...quickSort(less), supportElement, ...quickSort(greater)];
}

console.log(`\nОтсортированный массив: ${quickSort(array5)}`);
console.log(`Количество итераций: ${count5}\n`);