"use strict";
// Методы примитивов

// JavaScript позволяет нам работать с примитивными типами данных - строками, числам и т.д.,
// как будто они являются объектами. У них есть методы. Мы изучим их, а сначала разберем, 
// как это все работает, потому что примитивы - не объекты!

// Примитив
// Это - значение "примитивного" типа.
// Есть 7 примитивных типов: string, number, bigint, boolean, symbol, null, undefined

// Объект
// Может хранить множество значений как свойства.
// Объявляется при помощи фигурных скобок {}, например: {name: "Roma", age: 30}.
// Функции также являются объектами (!)
// Одна из лучших особенностей объектов - это то, что мы можем хранить функцию
// как одно из свойств объекта
let roma = {
    name: "Roma",
    sayHi: function() {
        console.log( "Hi" );
    }
}

roma.sayHi();
// Здесь мы создали объект roma с методом - свойством, содержащим определение функции - sayHi.
// Следует помнить, что объекты "тяжелее" примитивов. Они нудаются в дополнительных ресурсах
// для поддержания внутренней структуры

// Примитив как объект
// Вот парадокс, с которым столкнулся разработчик-создатель JS: хотелось бы много чего делать 
// с примитивами посредством методов, но в то же время примитивы должны быть легкими и быстрыми.
// Было решено, что примитив остается примтивом, а чтобы это работало, при доступе к методам и 
// свойствам строк, чисел, булевых значений и символов создается специальный "объект-обертка", 
// который предоставляет нужную функциональность, а потом удаляется.

// Каждый примитив имеет совй собственный "объект-обертку", которые называются: String, Number,
// Boolean, Symbol и BigIng. Таким образом, они имеют разный набор методов. 
// К примеру, существует метод str.toUpperCase(), который возвращает строку в верхнем регистре
let str = "Hello";

console.log( str.toUpperCase() ); // HELLO
// Все понятно! А происходит следующее:
// 1. Строка str - примитив. В момент обращения к его свойству, создается специальный объект, 
// который знает значение строки и имеет такие полезные методы, как toUpperCase()
// 2. Этот метод запускается и возвращает новую строку
// 3. Специальный объект удаляется, оставляя только примитив str

// У числа, безусловно, тоже существуют свои методы. Например, toFixed(n) округляет число до n
// знаков после запятой
let number = 1.23456;

console.log( number.toFixed(3) ); // 1.235

// Следует помнить, что конструкторы String/Number/Boolean предназначены только для
// внутреннего пользования (!)
// Некоторые языки, такие как Java, позволяют создание "объектов-оберток" для примитивов
// при помощи такого синтаксиса как new Number(1) или new Boolean(false).
// В JS это тоже возможно, но крайне не рекомендуется так делать!
console.log( typeof 0 ); // number
console.log( typeof new String(0) ); // object!
// С другой стороны, использование функций String/Number/Boolean без оператора newб чтобы
// превратить значение в соответствующий тип - вполне разумно и полезно
let number1 = String(12345);

console.log( typeof number1 ); // string

// null/undefined не имеют методов (!)
// Особенные примитивы null и undefined являются исключениями. У них нет
// соответствующих "объектов-оберток", и они не имеют никаких методов.
// console.log( null.test ); // cannot read properties 

console.log(
`\n----------------------
|    Задачи (1/1)    |
----------------------\n`);

// Могу ли добавить свойство строке? (!)
// "Нет, будет ошибка, строка - не объект", - ответил я и был прав 50/50.
// Верный ответ - с use strict будет undefined, без - ошибка.
// Так происходит потому, что:
// 1 - в момент обращения к свойству str создается "объект-обертка"
// 2 - в строгом режиме попытка изменения этого объекта выдает ошибку
// 3 - без строгого режиме операция продолжается, объект получает
// свойство test, но после удаляется, так что str больше не будет его иметь
// Примитивы не являются объектами и не могут хранить дополнительные значения (!)