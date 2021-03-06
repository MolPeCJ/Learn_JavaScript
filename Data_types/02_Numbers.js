"use strict";
// Числа
// В современном JS существует 2 типа чисел: 
// - обычные числа, что хранятся в 64-битном формате, также называют "числа с плавающей точкой
// двойной точности"
// - BigInt числа, дающие возможность работать с целыми числами произвольной длины. Они нужны
// когда необходимо работать со значениями более чем 2^53 и менее чем -2^53

// Первый тип чисел - number

// Cпособы записи числа
console.log(
`\n------------------------------
|    Способы записи числа    |
------------------------------\n`);

let billion = 1000000000;
// или, что и удобнее
let right_billion = 1e9; // 1 и e9 = 1 и 9 нулей. Другими словами, "e" производит операцию
// умножения числа на 1 с указанным количеством нулей
let example = 1.23e6;

console.log( right_billion == billion ); // true
console.log( example ); // 1230000
// Теперь давайте запишем что-нибудь очень маленькое. К примеру, 1 микросекунду (одна миллионная
// секунды):
let ms = 0.000001;
// или, что и удобнее
let right_ms = 1e-6; // шесть нулей, слева от 1. Отрицательное число после "e" подразумевает деление
// на 1 с указанным количеством нулей
let example1 = 1.23e-6;

console.log( right_ms ); // 0.000001
console.log( example1 ); // 0.00000123

// Шестнадцатеричные, двоичные и восьмеричные числа
// Шестнадцатеричные числа широко используются в JS для представления цветов, кодировки
// символов и многого другого. Естественно, есть короткий стиль записи: 0x, после которого
// указывается число
console.log( 0xff ); // 255
console.log( 0xFF ); // 255, регистр не имеет значения
// Не так часто используются двоичные и восьмеричные числа, но они также поддерживаются 0b для
// двоичных и 0o для восьмеричных
let a = 0b11111111; // бинарная (двоичная) форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255

console.log( a == b ); // true

// toString(base)
console.log(
`\n------------------
|    toString    |
------------------\n`);

// Метод num.toString(base) возвращает строковое представление числа num в системе счисления base
let num = 255;
let example2 = 21312312123;

console.log( num.toString(16) ); // ff
// base может варьироваться от 2 до 36 (по умолчанию 10)
console.log( example2.toString(36) ); // можно использовать 36-разрядную систему счисления для
// получения короткого представления большого числового идентификатора
console.log( 21312312123..toString(36) ); // такая же запись, что и выше, только если мы 
// используем просто число - надо ставить .. или взять число в ()

// Округление
console.log(
`\n--------------------
|    Округление    |
--------------------\n`);

// Одна из часто используемых операций при работе с числами - округление
// В JS есть несколько встроенных функций для работы с округлением:
// Math.floor - округление в меньшую сторону: 3.1 -> 3
// Math.ceil - округление в большую сторону: 3.1 -> 4
// Math.round - округление до ближайшего целого: 3.1 -> 3, 3.6 -> 4
// Math.trunc - удаление дробной части без округления: 3.1 -> 3

// Что если нам надо округлить число до n-ого количества цифр в дробной части?
// Есть два пути решения:
// 1 - умножить и разделить
let number = 1.23456;

console.log( Math.floor(number * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
// 2 - метод toFixed(n) округляет число до n знаков после запятой и возвращает
// строковое представление результата
console.log( number.toFixed(2) ); // 1.23 - строка! Может округлять как в большую, так
// и в меньшую сторону как Math.round

// Неточные вычисления (!)
console.log(
`\n-----------------------------
|    Неточные вычисления    |
-----------------------------\n`);

// Если число слишком большое, оно переполнит 64-битное хранилище, JavaScript вернет
// бесконечность
console.log( 1e500 ); // Infinity
// Наиболее часто встречающаяся ошибка при работе с числами в JavaScript - это потеря точности.
// Для наглядности посмотрим на это (неверное!) сравнение:
console.log( 0.1 + 0.2 == 0.3 ); // false
// Почему так происходит? Потому что 0.1 + 0.2 дает 0.300..4! И у этого могут быть гораздо большие
// последствия, чем просто некорректное сравнение. Например, в интернет-магазине пользователь
// формирует заказ из 2-х позиций по $0.20 и $0.30. Итоговый заказ будет 0.300..4!
// Ошибки в точности вычислений для чисел с плавающей точкой есть в любом другом языке, где
// используется формат IEEE 754, включая PHP, Java, C, Perl, Ruby.
// Наиболее надежный способ это исправить - окргулить результат испольщуя метод toFixed(n)
let answer = 0.1 + 0.2;

console.log( answer.toFixed(2) ); // 0.30 - строка! Можем дописать +, если надо привести к числу
console.log( +answer.toFixed(2) ); // 0.3

// Проверка: isFinite и isNaN
console.log(
`\n------------------------------------
|    Проверка: isFinite и isNaN    |
------------------------------------\n`);

// Вспомним специальные числовые значения:
// Infinity (-Infinity) - особенное численное значение, которое ведет себя в точности как
// математическая бесконечность;
// NaN представляет ошибку.
// Эти числовые значения принадлежат типу number, но они не являются "обычными" числами, 
// поэтому есть функции для их проверки:
console.log( isNaN(NaN) ); // true
console.log( isNaN("str") ); // true
// Эти функции нужны, так как мы не можем сравнивать NaN === NaN, ведь NaN уникально тем, 
// что оно не является равным ни чему другому, даже самому себе
console.log( NaN === NaN ); // false
// isFinite(value) преобразует аргумент в число и возвращает true, если оно является
// обычным числом, то есть НЕ NaN/Infinity/-Infinity
console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false, строка преобразуется в NaN
console.log( isFinite(Infinity) ); // false
// Иногда isFinite используется для проверки, содержится ли в строке число:
let example3 = 213;
let example4 = "Hello, Tolya";

console.log( isFinite(example3) ); // true
console.log( isFinite(example4) ); // false

// parseInt и parseFloat
console.log(
`\n-------------------------------
|    parseInt и parseFloat    |
-------------------------------\n`);

// Для явного преобразования к числу можно использовать + или Number(). Если строка не является
// в точности числом, то результат будет NaN
console.log( +"100pt" ); // NaN
// В реальной жизни мы часто сталкиваемся со значениями у которых есть единица измерения, 
// например "100px" или "12pt". Также во множестве стран символ валюты записывается
// после номинала "19$". Так как получить числовое значение из этих строк?
// Для этого и существует parseInt и parseFloat.
// Они "читают" число из строки. Если в процессе чтения возникает ошибка, они возвращают
// полученное до ошибки число. Функция parseInt возвращает целое число, parseFloat - с 
// плавающей точкой
console.log( parseInt("100$") ); // 100
console.log( parseFloat("10.2$") ); // 10.2
// если ошибка случается перед числом (например, $12), то вернется NaN
console.log( parseInt("$100") ); // NaN

// Функция parseInt() имеет необязательный второй параметр. Он определяет систему счисления, 
// таким образом parseInt может также читать строки с шестнадцатеричными числами и др.
console.log( parseInt("0xff", 16) ); // 255

// Другие математические функции
console.log(
`\n---------------------------------------
|    Другие математические функции    |
---------------------------------------\n`);

// В JS встроен объект Math, который содержит различные математические функции и константы:
// Math.random() - возвращается псевдослучайное число в диапазоне от 0 (включая) до 1 (не включая)
// Math.max(a, b, c...) - возвращает наибольшее число из аргументов
// Math.min(a, b, c...) - возвращает наименьшее число из аргументов
// Math.pow(n, power) - возвращает число n, возведенное в степень power
console.log( Math.random() );
console.log( Math.max(14, 15, 8) );
console.log( Math.min(14, 15, 8) );
console.log( Math.pow(4, 2) );

console.log(
`\n----------------------
|    Задачи (5/6)    |
----------------------\n`);

// Сумма пользовательских чисел
/*let num1 = +prompt( "Enter a", "" );
let num2 = +prompt( "Enter b", "" );
alert( num1 + num2 );*/

// Почему 6.36.toFixed(1) == 6.3? (!)
console.log( Math.round(6.35 * 10) / 10  );
// Что требуется понял неправильно, использовал не round, а floor и получал 6.3 (думал правильно)

// Ввод числого значения (!)
// Использовал механизм использования isFinite, бесконечного цикла while(true),
// но все равно не вышло...

// Бесконечный цикл по ошибке
// Цикл не завершится потому, что i не будет равно строго 10, 
// так как при сложении имеется неточность в виде 0.2......*,
// чтобы цикл завершился надо поставить условие i < 10

// Случайное число от min до max
function random(min, max) {
    return Math.random() * (max - min) + min;
}

console.log( random(1, 5) );

// Случайное целое число от min до max (!)
function randomInteger(min, max) {
    return Math.round(Math.random() * (max - min) + min);
} // - простое, но неправильное решение задачи, корректное не очень ясно, 
// приведено ниже

console.log( randomInteger(1, 5) );

function correctRandomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

console.log( correctRandomInteger(1, 5) );