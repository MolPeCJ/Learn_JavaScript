// Быстрая сортировка (сортировка Хоара)

const array = [0,3,2,5,6,8,1,9,4,2,1,2,9,6,4,1,7,-1, -5, 23,6,2,35,6,3,32]; // [0,1,1,2,3.......]

let count = 0;

function quickSort(array) {
    if (array.length <= 1) return array;

    let supportElementIndex = Math.floor(array.length / 2);
    let supportElement = array[supportElementIndex];
    let less = []; // массив для чисел меньших опорного
    let greater = []; // массив для чисел больше опорного
    
    for (let i = 0; i < array.length; i++) {
        count += 1;

        if (i === supportElementIndex) continue;

        if (array[i] < supportElement) {
            less.push(array[i]) 
        } else {
            greater.push(array[i]);
        }
    }

    return [...quickSort(less), supportElement, ...quickSort(greater)];
}

console.log(`\nОтсортированный массив: ${quickSort(array)}`);
console.log(`Количество итераций: ${count}\n`);