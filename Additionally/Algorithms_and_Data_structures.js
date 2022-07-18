// Линейный поиск элемента в массиве 
console.log('\nЛиненый поиск элемента в массиве'); 

const array1 = [1, 4, 6, 2, 9, 10, 15, 17, 101, 0, 23];

let count1 = 0;

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {

        count1 += 1;

        if (array[i] == item) {
            return i;
        }
    }

    return null;
}

console.log( linearSearch(array1, 2) );
console.log( `count = ${count1}` );

// Бинарный поиск элемента в массиве 
console.log('\nБинарный поиск элемента в массиве '); 

const array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count2 = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;

    while(start <= end) {
        count2 += 1;
        middle = Math.floor((start + end) / 2);

        if (array[middle] === item) return middle;

        if (item < array[middle]) {
            end = array[middle] - 1;
        } else {
            start = array[middle] + 1;
        }
    }
}

console.log( binarySearch(array2, 0) );
console.log( `count = ${count2}` );