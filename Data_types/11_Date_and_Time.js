'use strict';
// Новый встроенный объект: Date. Он содержит дату и время, а также предоставляет
// методы управления ими. 
// Например, его можно использовать для хранения времени создания/изменения, для измерения
// времени или просто для вывода текущей даты.

// Создание
console.log(
`\n------------------------------
|    Создание (4 способа)    |
------------------------------\n`);

// Для создания нового объекта Date нужно вызвать конструктор new Date() с одним из следующих
// аргументов: 

// new Date()
// Без аргументов - создать объект Date с текущими датой и временем:
let now = new Date();
console.log( now ); // показывает текущие дату и время

// new Date(milliseconds)
// Создать объект Date с временем, равным количеству миллисекунд (тысячная доля секунды), 
// прошедших с 1 января 1970 года UTC+0
let jan01_1970 = new Date(0);
console.log( jan01_1970 ); // 1970-01-01
// теперь добавим 24 часа и получим 02.01.1970 UTC+0
let jan02_1970 = new Date(24 * 3600 * 1000);
console.log( jan02_1970 ); // 1970-01-02

// Целое число, представляющее собой количество миллисекунд, прошедших с начала 1970 года, 
// называется таймстамп (~timestamp).
// Это - легковесное численное представление даты. Из таймстампа всегда можно получить дату
// с помощью new Date(timestamp) и преобразить существующий объект Date в таймстамп, используя
// метод date.getTime(), будет ниже

// new Date(datestring)
// Если аргумент всего один (строка), то из нее "прочитывается" дата. Алгоритм разбора -
// такой же, как в Date.parse, который будет ниже
let date = new Date('2017-01-26');
console.log(date); // 2017-01-26, время не указано и меняется в соответствии с часовым
// поясом места выполнения кода

// new Date(year, month, date, hours, minutes, seconds, ms)
// Создать объекты Date с заданными компонентами в местном часовом поясе. Обязательно указывать
// только первые два аргумента:
// * year - должен состоять из четырех цифр, можно и 2 (рассматриваются как 19xx), но лучше 4
// * month - начинается с 0 (январь) по 11 (декабрь)
// * date - представляет собой день месяца. Если параметр не задан, то ставится значение 1
// * hours/minutes/seconds/ms - отсутствуют, их значением становится 0
let date2 = new Date(2001, 3, 20, 19, 15, 15); // 2001-04-20T15:15:15.000Z
console.log( date2 );

// Получение компонентов даты
console.log(
`\n------------------------------------
|    Получение компонентов даты    |
------------------------------------\n`);

// Существуют методы получения года, месяца и т.д. из объекта Date:
console.log( date2.getFullYear() ); // (!) НЕ getYear (!) 2001, 4 цифры
console.log( date2.getMonth() ); // 3, от 0 до 11
console.log( date2.getDate() ); // 20, от 1 до 31
console.log( date2.getHours() );
console.log( date2.getMinutes() );
console.log( date2.getSeconds() );
console.log( date2.getMilliseconds() );

console.log( date2.getDay() ); // от 0 (воскресенье) до 6 (суббота)

// Все вышеперечисленные методы возвращают значения в соответствии с местным часовым поясом

// Однако существуют и их UTC-варианты (Universal Time Coordinated)
let date3 = new Date();

console.log( date3.getHours() ); // 13
console.log( date3.getUTCHours() ); // 10

// Помимо вышеприведенных методов, существуют два особых метода без UTC-варианта:
console.log( date3.getTime() ); // возвращает таймстамп даты с 1 января 1970 года
console.log( date3.getTimezoneOffset() ); // возвращает разницу в минутах между UTC и местным
// часовым поясом 

// Установка компонентов даты
console.log(
`\n------------------------------------
|    Установка компонентов даты    |
------------------------------------\n`);

// Следующие методы позволяют установить компоненты даты и времени:

// * setFullYear(year, [month], [date])
// * setDate(date)
// * setMonth(month, [date])
// * setHours(hour, [min], [sec], [ms])
// * setMinutes(min, [sec], [ms])
// * setSeconds(sec, [ms])
// * setMilliseconds(ms)
// * setTime(milliseconds) // устанавливает дату в виде целого количества миллисекунд, прошедших с 01.01.1970 UTC

// У всех этих методов, названия которых почти не отличны от предыдущей пачки выше, есть UTC-варианты

let today = new Date();

console.log( today ); // 2022-07-16T10:47:20.993Z

today.setMonth(0)

console.log( today ); // 2022-01-16T10:47:20.993Z

// Автоисправление даты
console.log(
`\n------------------------------
|    Автоисправление даты    |
------------------------------\n`);

// Автоисправление – это очень полезная особенность объектов Date. 
// Можно устанавливать компоненты даты вне обычного диапазона значений, а объект сам себя исправит
let date4 = new Date(2013, 0, 32); // 32 Jan 2013 ?!
console.log( date4 ); // 1st Feb 2013!

// Предположим, нам требуется увеличить дату «28 февраля 2016» на два дня. 
// В зависимости от того, високосный это год или нет, результатом будет «2 марта» или «1 марта». 
// Нам об этом думать не нужно. Просто прибавляем два дня. Объект Date позаботится об остальном:
let date5 = new Date(2016, 1, 29);

console.log( date5 ); // 28 Feb 2016

date5.setDate(date5.getDate() + 2);

console.log( date5 ); // 1 Mar 2016

// Преобразование к числу, разность дат
console.log(
`\n----------------------------------------------
|    Преобразование к числу, разность дат    |
----------------------------------------------\n`);

// Если объект Date преобразовать в число, то получим таймстамп по аналогии с date.getTime():
let date6 = new Date();
console.log( +date6 ); // 1657969545544

// Также можно использовать вычитание дат для измерения времени: 
let start = new Date(); // начинаем отсчёт времени

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
    let array = [];
  
    array.push(i);
}

let end = new Date(); // заканчиваем отсчёт времени

console.log( `Цикл отработал за ${end - start} миллисекунд` );

// Date.now()
console.log(
`\n--------------------
|    Date.now()    |
--------------------\n`);

// Если нужно просто измерить время, объект Date нам не нужен.

// Существует особый метод Date.now(), возвращающий текущую метку времени.
// Семантически он эквивалентен new Date().getTime(), однако метод не создаёт промежуточный объект Date. 
// Так что этот способ работает быстрее и не нагружает сборщик мусора.
// Данный метод используется из соображений удобства или когда важно быстродействие.
// Например, при разработке игр на JavaScript или других специализированных приложений

// Предыдущий пример лучше переписать так:
let start2 = Date.now(); // количество миллисекунд с 1 января 1970 года

// выполняем некоторые действия
for (let i = 0; i < 100000; i++) {
    let array = [];
  
    array.push(i);
}

let end2 = Date.now(); // заканчиваем отсчёт времени

console.log( `Цикл отработал за ${end2 - start2} миллисекунд` ); // вычитаются числа, а не даты

// Бенчмаркинг
console.log(
`\n---------------------
|    Бенчмаркинг    |
---------------------\n`);

// Надо быть внимательным при тестировании производительности функции, которая зависит от процессора.
// Вычисления, замеряющие производительность, называются 'бенчмарками' (benchmark)

let date7 = new Date(1980, 1, 15);
let date8 = new Date(1981, 1, 15);

function diffSubtract(date7, date8) {
    return date8 - date7;
  }
  
function diffGetTime(date7, date8) {
    return date8.getTime() - date7.getTime();
}
  
function bench(f) {
    let start = Date.now();

    for (let i = 0; i < 100000; i++) {
        f(date7, date8);
    }

    return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// добавляем для 'разогрева' перед основным циклом
bench(diffSubtract);
bench(diffGetTime);

// bench(diffSubtract) и bench(diffGetTime) поочерёдно запускаются 10 раз
for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
}
  
console.log( 'Время diffSubtract: ' + bench(diffSubtract) + 'мс' );
console.log( 'Время diffGetTime: ' + bench(diffGetTime) + 'мс' );
  
console.log( 'Итоговое время diffSubtract: ' + time1 );
console.log( 'Итоговое время diffGetTime: ' + time2 );

// Вот это да! Метод getTime() работает ощутимо быстрее! 
// Всё потому, что не производится преобразование типов, и интерпретаторам такое намного легче оптимизировать.
// Но для получения наиболее достоверных результатов тестирования производительности весь набор бенчмарков 
// нужно запускать по нескольку раз.
// Например: добавить к предыдущему примеру дополнительный цикл for. 
// Нелишним будет добавить предварительный запуск для 'разогрева'

// Разбор строки с датой
console.log(
`\n-------------------------------
|    Разбор строки с датой    |
-------------------------------\n`);

// Бесполезная ерунда

console.log(
`\n----------------------
|    Задачи (7/8)    |
----------------------\n`);

// Создайте дату

let new_date = new Date(2012, 1, 21, 7, 12); // html работает с другими числами

console.log( new_date );

// Покажите день недели (!) - есть более красивый вариант

function getWeekDay(date) {
    if (date.getDay() == 0) {
        return 'ВС';
    }
    if (date.getDay() == 1) {
        return 'ПН';
    }
    if (date.getDay() == 2) {
        return 'ВТ';
    }
    if (date.getDay() == 3) {
        return 'СР';
    }
    if (date.getDay() == 4) {
        return 'ЧТ';
    }
    if (date.getDay() == 5) {
        return 'ПТ';
    }
    if (date.getDay() == 6) {
        return 'СБ';
    }
}

let example = new Date(2012, 0, 3);  // 3 января 2012 года

console.log( getWeekDay(example) );   

// День недели в европейской нумерации

function getLocalDay(date) {
    let days = ['7', '1', '2', '3', '4', '5', '6'];
    
    return +days[date.getDay()];
}

let example2 = new Date(2012, 0, 2);  // 3 января 2012 года

console.log( getLocalDay(example2) );
console.log( example2.getDay() );

// Какой день месяца был много дней назад? (!) - есть немного иное решение, но в целом ок

function getDateAgo(date, days) {
    let difference = days * 24 * 3600 * 1000;
    let time = date.getTime();
    let answer = new Date(time - difference);

    return answer.getDate();
}

let date9 = new Date(2015, 0, 2);

console.log( getDateAgo(date9, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date9, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date9, 365) ); // 2, (2 Jan 2014)

// Последнее число месяца?
function getLastDayOfMonth(year, month) {
    if (year % 4 == 0) {
        if (month == 1) {
            return 29;
        }
    }

    let theLastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    return theLastDays[month];
}

// Cколько сегодня прошло секунд?

function getSecondsToday() {
    let today = new Date();
    
    return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
}

console.log( getSecondsToday() );

// Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
    let today = new Date();
    
    return 86400 - (today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds());
}

console.log( getSecondsToTomorrow() );

// Форматирование относительной даты (!) - плохая формулировка задачи

function formatDate(date) {
    let now = new Date();

    if (now.getTime() - date < 1) {
        console.log( 'right now' );
        return;
    }

    if (now - date < 60) {
        console.log( 'n sec ago' );
        return;
    }

    if (now - date < 3600) {
        console.log( 'm min ago' );
        return;
    }
}