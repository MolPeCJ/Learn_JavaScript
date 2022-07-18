// Для простых объектов доступны следующие методы:
// Object.keys(obj) - возвращает массив ключей
// Object.values(obj) - возвращает массив значений
// Object.entries(obj) - возвращает массив пар "ключ - значение"
let user = {
    name: "Jhon",
    age: 30
};

console.log( Object.keys(user) ); // 'name', 'age'
console.log( Object.values(user) ); // 'Jhon', 30
console.log( Object.entries(user) ); // [ ['name', 'Jhon'], ['age', 30] ]

// Пример перебора значений свойств в цикле
for (let value of Object.values(user)) {
    console.log(value); // John, затем 30
}

// Трансформация объекта
console.log(
`\n-------------------------------
|    Трансформация объекта    |
-------------------------------\n`);

// У объектов нет множества методов, которые есть в массивах, например map, filter и других.
// Если мы хотели бы их применить, то можно использовать Object.entries с последующим вызовом Object.fromEntries:
// 1. Вызов Object.entries(obj) возвращает массив пар ключ/значение для obj.
// 2. На нём вызываем методы массива, например, map.
// 3. Используем Object.fromEntries(array) на результате, чтобы преобразовать его обратно в объект.
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};
  
let doublePrices = Object.fromEntries(
    // преобразовать в массив, затем map, затем fromEntries обратно объект
    Object.entries(prices).map(([key, value]) => [key, value * 2])
);
  
console.log(doublePrices.meat); // 8

console.log(
`\n----------------------
|    Задачи (2/2)    |
----------------------\n`);

// Сумма свойств объекта
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(salaries) {
    let sum = 0;

    for(let value of Object.values(salaries)) {
        sum += value;
    }

    return sum;
}

console.log(sumSalaries(salaries)); // 650

// Подсчет количества свойств в объекте
function count(obj) {
    return Object.entries(obj).length;
}

console.log(count(user)); // 2