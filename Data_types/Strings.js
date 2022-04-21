"use strict";
// Строки
// В JavaScript любые текстовые данные являются строками. Не существует отдельного типа "символ",
// который есть в ряде других языков. 
// Внутренний формат для строк - всегда UTF-16, вне зависимости от кодировки страницы

// Кавычки

// В JS есть разные типы кавычек.
// Строку можно создать с помощью одинарных, двойных либо обратных кавычек:
let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;
// Одинарные и двойные кавычки работают, по сути, одинаково, а если использовать обратные кавычки,
// то в такую строку мы сможем вставлять произвольные выражения, обернув их в ${}:
function sum(a, b) {
    return a + b;
}

console.log( `1 + 2 = ${sum(1, 2)}` ); // 1 + 2 = 3
// Еще одно преимущество обратных кавычек - они могут занимать более одной строки, вот так:
let guestList = `Guests:
Jhon,
Pete,
Mary`;

console.log (guestList); // все так и будет
// Одинарные и двойные кавычки в языке с незапамятных времен: тогда потребность в многострочных
// строках не учитывалась. Что касается обратных кавычек, они появились существенно позже, и
// поэтому они гибче

// Спецсимволы

// Многострочные строки также можно создавать с опомщью одинарных и двойных кавычек, используя
// так называемый "символ перевода строки", который записывается как \n:
let guestList1 = "Guests: \nJhon, \nPete, \nMary";

console.log(guestList1)
// Есть и другие, реже используемые спецсимволы. Вот список: *в уроке*
// Отдельного внимания заслуживает Юникод:
console.log( "\u00A9" ); // (c)
console.log( "\u{20331}" ); // китайский символ (длинный юникод)
console.log( "\u{1F60D}" ); // символ-смайлик улыбающегося лица (длинный юникод)
// Все спецсимволы начинаются с обратного слеша, \ - так называемого "символа экранирования".
// Он также используется, если необходимо вставить в строку кавычку:
console.log( "I\'m student" ); // I'm...
// При этом символ \ НЕ сохраняется в оперативную память со строкой. Если же нужен сам
// этот символ, то используют \\
console.log( "Example \\" ); // \

// Длина строки

// Свойство length содержит длину строки:
console.log( guestList1.length ); // 27
// Важно! length - это числовое свойство, а не функция
// Надо писать str.length, а не str.length()

// Доступ к символам (!)

// Получить символ, который занимает позицию pos, можно с помощью квадратных скобок: [pos].
// Также можно использовать метод charAt: str.charAt(pos). Первый символ занимает 0-ю полизицию:
let str = `Hello, World!`;

console.log( str[1] ); // e
console.log( str.charAt(str.length - 1) ); // !
// Квадратные скобки - современный способ получить символ, в то время как charAt существует в
// основном по историческим причинам. Разница между нили только в том, что если символ
// отсуствует, тогда [] вернет undefined, а charAT - пустую строку:
console.log( str[25] ); // undefined
console.log( str.charAt(25) ); // 
// Также можно перебрать строку посимвольно! используя for...of:
for (let char of "Hello") {
    console.log( char );
}

// Строки неизменяемы

// Содержание строки в JS нельзя изменить. Нельзя взять символ посередине и заменить его.
// Как только строка создана - она такая навсегда!
let str2 = "Hi";

//str2[0] = "a"; // ошибка
// Можно создать новую строку и записать ее в ту же самую переменную вместо старой
let example1 = "Hello, Kirill";
let example2 = "Hi, Tolya";

example1 = example2;
example2 = 'h' + example1[1] + example1[2];

console.log( example2 ); // Hi, Tolya || hi,

// Изменение регистра

// Методы toLowerCase() и toUpperCase() меняют регистр символов:
console.log( "Interface".toLocaleLowerCase() ); // interface
console.log( "Interface".toUpperCase() ); // INTERFACE
// Еслимы мы захотим перевести в другой регистр какой-то конкретный символ и показать его:
console.log( "Interface"[1].toUpperCase()); // N

// Поиск подстроки
