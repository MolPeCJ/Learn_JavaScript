// 1
let user = {};

user.name = "Jhon";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 2
let example = {};

function isEmpty(object) {
    for(let key in object) {
        return true;
    }

    return false;
}

console.log( isEmpty(example) );

// 3
// Да, так как меняется ключ объекта, но не он сам

// 4
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

function sum (object) {
    let totalSum = 0;

    for(let key in object) {
        totalSum += object[key];
    }

    return totalSum;
}

console.log( sum(salaries) );

// 5
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumber(object) {
    for(let key in object) {
        if (typeof object[key] == "number") {
            object[key] *= 2;
        }
    }
}

multiplyNumber(menu);

for(let key in menu) {
    console.log( menu[key] );
}