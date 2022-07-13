'use strict';

// 1
function camelize(str) {
    let arr = str.split('');

    arr.forEach((item, index) => {
        if (item == '-') {
            arr.splice(index, 2, arr[index + 1].toUpperCase());
        }
    });

    return arr.join('');
}

let exampleStr = "background-color";

console.log(camelize(exampleStr));

// 2
function filterRange(arr, a, b) {
    let answer = [];

    arr.forEach((item) => {
        if (item >= a && item < b) {
            answer.push(item);
        }
    });

    return answer;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // [3, 1]

// 3
function filterRangeInPlace(arr, a, b) {
    arr.forEach((item, index) => {
        if (item <= a || item >= b) {
            arr.splice(index, 1);
        }
    });
}

let arr2 = [5, 3, 8, 1];

filterRangeInPlace(arr2, 1, 4);

console.log(arr2); // [3, 1]

// 4
let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => b - a);

console.log(arr3);

// 5
function copySorted(arr) {
    return arr.slice().sort();
}

let arr4 = ["HTML", "JavaScript", "CSS"];

console.log(copySorted(arr4));

// 6

// 7 
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name);

console.log(names);

// 8 
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [ vasya1, petya1, masha1 ];

let usersMapped = users1.map(item => ({
    id: item.id,
    fullName: item.name + ' ' + item.surname
}));

console.log(usersMapped);

// 9 
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr5 = [ vasya2, petya2, masha2 ];

function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}

sortByAge(arr5);

console.log(arr5);

// 10 

// 11 
function getAverageAge(users) {
    let arr = users.map(item => item.age);
    let answer = 0;

    for (let number of arr) {
        answer += number;
    }
    
    return Math.round(answer / arr.length);
}

console.log(getAverageAge(arr5));

// 12
