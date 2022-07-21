// Линейный поиск элемента в массиве 

const array = [1, 4, 6, 2, 9, 10, 15, 17, 101, 0, 23];
    
let count = 0;
    
function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
    
        count += 1;
    
        if (array[i] == item) {
            return i;
        }
    }
    
    return null;
}

console.log(`\nЦифровой индекс массива: ${linearSearch(array, 9)}`);
console.log(`Количество итераций: ${count}\n`);