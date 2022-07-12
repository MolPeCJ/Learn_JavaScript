'use strict';

// 1

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
