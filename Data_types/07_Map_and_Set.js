let map = new Map();

map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");
map.set(NaN, "hehe");

console.log( map.get(NaN) );

// Перебор Map
console.log(
`\n--------------
|    Map    |
-------------\n`);

let receipeMap = new Map([
    ["apple", 2],
    ["potatoe", 5],
    ["cucumber", 10]
]);

for (let value of receipeMap.keys()) {
    console.log( value );
}

receipeMap.forEach((value, key) => {
    console.log( `${key}: ${value}`);
});

// Object.entries
console.log(
`\n------------------------
|    Object.entries    |
------------------------\n`);

let obj = {
    name: "Jhon",
    age: 30
};

let map2 = new Map(Object.entries(obj));

console.log( map2.get("name") ); 

// Object.fromEntries
console.log(
`\n----------------------------
|    Object.fromEntries    |
----------------------------\n`);

let prices = new Map([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

let obj2 = Object.fromEntries(prices);

console.log( obj2.banana );

// Set
let set = new Set(['apple', 'banana', 'juice']);

for (let value of set) console.log( value ); // =
set.forEach((value, valueAgain, set) => console.log( value ));

console.log(
`\n----------------------
|    Задачи (2/3)    |
----------------------\n`);

// Фильтрация уникальных элементов массива
function unique(arr) {
    let set = new Set(arr);
    let answer = Array.from(set); // обратить внимание на этот способ

    return answer;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );

// Отфильтруйте анаграммы
function aclean(arr) {
    let set = new Set(arr);
    let answer = Array.from(set); // обратить внимание на этот способ

    return answer;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );

// Перебираемые ключи
let map3 = new Map();

map3.set("name", "John");

let keys = Array.from(map3.keys());

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");

console.log( keys );