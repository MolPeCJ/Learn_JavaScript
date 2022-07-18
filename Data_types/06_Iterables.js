let range = {
    from: 1,
    to: 5,
};

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++};
            } else {
                return { done: true };
            }
        }
    };
};

for (let element of range) {
    console.log( element );
}

// Array.from

let arrayLike1 = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr1 = Array.from(arrayLike1);

console.log( arr1.pop() ); // World - удаленный элемент
console.log( arr1.length ); // 1

arr1.push("World");
console.log( arr1.length ); // 2

let arrayLike2 = {
    0: 100,
    1: 250,
    2: 340,
    length: 3
};

let arr2 = Array.from(arrayLike2, num => num * 2);

console.log ( arr2 ); // 200, 500, 680