"use strict";
// Преобразование объектов в примитивы

// Хинты
// Как JS решает, какое преобразование применить?
// Существует три варианта преобразования типов, которые происходят в различных ситуациях.
// Они называются "хинтами", как описано в спецификации:

// "string"
// Для преобразования объекта к строке, когда мы выполняем операцию над объектом, которая
// ожидает строку, например alert или сonsole.log.
// Также когда используем объект в качестве имени свойства другого объекта
/*anotherObj[obj] = 123;

// "number"
// Для преобразования объекта к числу, в случае математических операций: 
// явное преобразование
let num = Number(obj);
// математическое (не считая бинарного плюса)
let n = +obj; // унарный плюс
let delta = date1 - date2;
// сравнения больше/меньше
let greater = user1 > user2;

// "default"
// Происходит редко, когда оператор "не уверен", какой тип ожидать.
// Например, бинарный плюс + может работать как со строками (объдиняя их в одну), так и с
// числами (складывая их). Поэтому, если бинарный плюс получает объект в качестве аргумента, он
// использует хинт "default" для его преобразования.
// Также, если объект сравнивается с помощью == со строкой, числом или символом, тоже неясно, 
// какое преобразование следует выполнить, поэтому используется хинт "default"
let total = obj1 + obj2; // бинарный плюс использует хинт "default"
if (user == 1) {}; // obj == number использует хинт "default"

// Все встроенные объекты, за исключением одного (объект Date, который мы рассмотрим позже),
// реализуют "default" преобразование тем же способом, что и "number". 
// И на следует поступать так же

// Symbol.toPrimitive (!)
// Начнем с первого метода. Есть встроенный символ с именем Symbol.toPrimitive,
// который следует использовать для обозначения метода преобразования, вот так:
obj[Symbol.toPrimitive] = function(hint) {
    // вот код преобразования этого объекта в примитив
    // он должен вернуть примитивное значение
    // hint = чему-то из "string", "number", "default"
};*/
// Если метод Symbol.toPrimitive существует, он используется для всех хинтов, и больше никаких
// методов не требуется.
// Например, здесь объект user реализует его:
let user = {
    name: "Jhon",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log( `hint: ${hint}` );
        return hint == "string" ? `name: ${this.name}` : this.money;
    }
};

console.log(String(user)); // для пущей понятливости
console.log(+user); // работает как надо
console.log(user + 500); // работает как надо
// Так объект user становится или строкой, или числом, или суммой в зависимости от преобразования. 
// Единый метод [Object.toPrimitive] обрабатывает все случаи

// toString/valueOf (!)
// Если нет Symbol.toPrimitive, тогда JS пытается найти методы toString и valueOf.
// Для хинта "string": вызвать метод toString, если он не существует - valueOf
// Для других хинтов: вызвать valueOf, если он не существует - toString
// Короче говоря, в противном случае он вызывается дефолтно, как указано ниже (!)

// По умолчанию обычный объект имеет следующие методы toString и valueOf:
// - метод toString возвращает строку "Object object"
// - метод valueOf возвращает сам объект

// Взгляни на пример и разницу после переопределения методов
let person = {
    name: "Pavel", 
    sum: 1000
};

console.log(String(person)); // object Object
console.log(person.valueOf() === person); // true
console.log(+person); // NaN

let person1 = {
    name: "Pavel", 
    sum: 1000,
    toString() {
        return this.name;
    },
    valueOf() {
        return this.sum;
    }
};

console.log(String(person1)); // Pavel
console.log(+person1); // 1000

let person2 = {
    name: "Pavel", 
    sum: 1000,
    toString() {
       return this.name;
    }
};

console.log(String(person2)); // Pavel
console.log(person2 + 500); // Pavel500

// Преобразование может вернуть любой примитивный тип

// Дальнейшие преобразования
// Как мы уже знаем, многие операторы и функции выполняют преобразование типов, например, 
// умножение ; преобразует операнды в числа. 
// Если мы передаем объект в качестве аргумента, то в вычислениях буду две стадии:
// 1 - объект преобразуется в примитив (с использование правил, описанны выше)
// 2 - Если необходимо для дальнейших вычислений, этот примитив преобразуется дальше
// Например:
let obj = {
    toString() {
        return "2";
    }
};

console.log(obj * 2); // 4, объект был преобразован к примитиву 2, затем умножался

// А вот сложение, например, происходит иначе - будет конкатенация 
console.log(obj + 2); // 22, объект был преобразован к примитиву 2, затем произошла конкатенация