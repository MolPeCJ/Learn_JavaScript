"use strict";
// Конструкторы, создание объектов через "new"

// Обычный синтаксис {...} позволяет создать только один объект. Но зачастую нам нужно создать
// множество однотипных объектов, таких как пользователи, элементы меню и т.д.
// Это можно сделать при помощи функции-конструктора и оператора "new"

// Функция-конструктор

// Функции-конструкторы являются обычными функциями. Но есть два соглашения: 
// 1. Имя функции конструктора должно начинаться с большой буквы
// 2. Функция-конструктор должна вызываться при помощи оператора "new"
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Vasya");

console.log(user.name); // Vasya
console.log(user.isAdmin); // false
// Когда функция вызывается как new User(...), происходит следующее:
// 1. Создается новый пустой объект, и он присваивается this.
// 2. Выполняется код функции. Обычно он модифицирует this, добавляет туда новые свойства.
// 3. Возвращается значение this
// То есть, результат вызова функции это тот же объект, что и:
let user1 = {
    name: "Vasya",
    isAdmin: false
};

// Теперь, когда нам необходимо будет создать других пользователей, мы можем использовать
// new User("Masha"), new User("Dasha") и т.д. Данная конструкция гораздо удобнее и читабельнее, 
// чем каждый раз создавать литерал объекта. Это и является основной целью конструкторов - удобное
// повторное создание однотипных объектов.
// Еще раз заметим: технически любая функция может быть использована как конструктор. То есть,
// каждая функция может быть вызвана при помощи оператора new, и выполнится алгоритм, 
// указанный выше в примере. Заглавная буква в названии функции является всеобщим соглашением
// по именованию, она как бы подсказывается разработчику, что данная функция является
// функцией-конструктором, и ее нужно вызывать через new.

// new function() {...}
// Если в нашем коде большое количество строк, создающих один сложный объект, мы можем
// обернуть их в функцию-конструктор следующим образом:
let user2 = new function() {
    this.name = "Vasya";
    this.isAdmin = false;
}
// Такой конструктор не может быть вызван дважды, так как он нигде не сохраняется, просто
// создается и тут же вызывается. Таким образом, такой метод создания позволяет
// инкапсулировать код, который создает отдельный объект, но без возможности его
// повторного использования

// Проверка на вызов в режиме конструктора: new.target
// Данный метод используется очень редко

// Возврат значения из конструктора return

// Обычно конструкторы ничего не возвращают явно. Их задача - записать все необходимое в this, 
// который в итоге станет результатом. 
// Но если return все же есть, то применяется просто правило:
// - при вызове return с объектом, будет возвращен объект, а не this
// - при вызове return с примитивным значением, примитивное значение будет отброшено
// Другими словами, return с объектом возвращает объект, в любом другом случае конструктор
// вернет this.
function BigUser() {
    this.name = "Vasya";

    return { name: "Godzilla" }; // возвращает этот объект (абстрактный какой-то)
}

console.log( new BigUser().name ); // Godzilla, получили этот объект

// А вот пример с пустым (или мы могли поставить примитив после return, неважно)

function SmallUser() {
    this.name = "Vasya";

    return; // возвращает this
}

console.log( new SmallUser().name ); // Vasya
// Обычно у конструкторов отсутствует return. В данном блоке мы упомянули особое поведение с
// возвращаемыми объектами, чтобы не оставлять пробелов в изучении языка 

// Отсутствие скобок

// Кстати, мы можем не ставить скобки после new, если вызов конструктора идет без аргументов
let user3 = new User; // без скобок
// то же, что и
let user4 = new User();

// Создание методов в конструкторе

// Использование конструкторов для создания объектов дает большую гибкость. Можно передавать
// конструктору параметры, определяющие, как создавать объект, и что в него записывать.
// В this мы можем добавлять не только свойства, но и методы. 
// Например, в примере ниже, new User(name) создает объект с данным именем name и методом sayHi
function User1(name) {
    this.name = name;

    this.sayHi = function() {
        console.log( `My name is ${name}` );
    };
}

let vasya = new User1("Vasya");

vasya.sayHi();
// Для создания сложных объектов есть и более "продвинутый" синтаксис - классы, которые мы
// разберем позже 

/////////////////////////////////////////////
///////////// Questions (2/3) ///////////////
/////////////////////////////////////////////

// Two functions - one object (!)

let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A;
let b = new B;

console.log( a == b );
// Да, возможно, неправильно ответил, что невозможно после одного неудачного теста

// Create new Calculator
/*function Calculator() {
    this.read = function() {
        this.theFirstValue = +prompt( "Enter the first value", "" );
        this.theSecondValue = +prompt( "Enter the second value", "" );
    },
    this.sum = function() {
        return(this.theFirstValue + this.theSecondValue);
    },
    this.mul = function() {
        return(this.theFirstValue * this.theSecondValue);
    }
}

let calculator = new Calculator;
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );*/
// Не надо забывать о правильном объявлении метода в конструкторе - this.method = function() {}

// Create new Accumulator
/*function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.addValue = +prompt( "Enter value", "" );
        this.value += this.addValue;
    }
}*/