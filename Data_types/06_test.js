'use strict';

// 1
function unique(arr) {
    let set = new Set();

    for (let value of arr) {
        set.add(value);
    }

    return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) );

// 2
function aclean(arr) {
    let arrayEnding = [];

    for (let i = 0; i < arr.length; i++) {
        let valueArr = arr[i].toLowerCase().split('');
        let value = 0;

        for (let j = 0; j < valueArr.length; j++) {
            value += valueArr[j].codePointAt();
        }

        arrayEnding.push({ number: value, name: arr[i] });
    }

    for (let i = 0; i < arrayEnding.length - 1; i++) {
        for (let j = 0; j < arrayEnding.length; j++) {
            if (arrayEnding[i].number == arrayEnding[j].number) {
                arrayEnding.splice(i, 1);
            }
        }
    }

    return arrayEnding.map(item => item.name);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );

// 3
let map = new Map();

map.set("name", "John");

let keys = map.keys();

keys = Array.from(keys);

keys.push("more");

console.log(keys);