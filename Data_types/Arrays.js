"use strict";
// Массивы

// Объекты позволяют хранить данные со строковыми ключами. Это замечательно.
// Но довольно часто мы понимаем, что нам необходима упорядоченная коллекция данных, в которой
// присутствует 1-й, 2-й, 3-й элементы. Например, она понадобится нам для хранения списка
// чего-либо: пользователей, товаров, элементов HTML и т.д.

// В этом случае использовать объект неудобно, так как он не предоставляет методов управления
// порядком элементов. Мы не может вставить новое свойство "между" уже существующими. Объекты
// просто не предназначены для этих целей.

// Для хранения упорядоченных коллекций существует особая структура данных, которая называется
// массив, Array.

// Объявление

// Существует два варианта синтаксиса для создания пустого массива:
let arr1 = new Array();
let arr2 = [];
// Практически всегда используется второй вариант синтаксиса. В скобках мы можем указать 
// начальные значения элементов:
let fruits = ["Apple", "Orange", "Banana"];
// Элементы массива нумеруются, начиная с нуля.
// Мы можем получить элемент, указав его номер в квадртаных скобках:
console.log( fruits[0] ); // Apple
console.log( fruits[1] ); // Orange
// Мы можем заменить элемент:
fruits[2] = "Hat";

console.log( fruits[2] ); // Hat
// Общее число элементов массива содержится в его свойстве length:
console.log( fruits.length ); // 3
console.log( fruits ); // массив выводится целиком

// В массиве могут храниться элементы любого типа (!)
let example = ["Apple", { name: "Jhon" }, true, function() { console.log( "Hello" ); }];
console.log( example[1].name ); // Jhon
example[3](); // Hello

// Получение последних элементов при помощи "at"

// Допустим, нам нужен последний элемент массива. 
// Некоторые языки программирования позволяют использовать отрицательные индексы для той же
// цели, как-то так: fruits[-1].
// Однако в JS такая запись не работает. Ее результатом будет undefined, посколько индекс
// в квадратных скобках понимается буквально.
// Мы можем явно вычислить индекс последнего элемента, а затем получить к нему доступ вот так:
console.log( fruits[fruits.length - 1] ); // Hat
// Но такая запись довольно-таки громоздкая, поэтому, к счастью, есть более 
// короткий синтаксис: fruits.at(-1):
console.log( fruits.at(-1) ); // Hat
// Другими словами, arr.at(i) - то же самое, что и arr[i], когда i >= 0,
// при отрицательных же значениях он отступает от конца массива

// Методы pop/push, shift/unshift

// Очередь - один из самых распространенных вариантов применения массива. В области
// компьютерных наук так называется упорядоченная коллекция элементов, поддерживающая два вида
// операций:
// - push - добавляет элемент в конец
// - shift - удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым
// Массив поддерживают обе операции!
// На практике необходимость в этом возникает очень часто. Например, очередь сообщений, которые
// надо показать на экране.
let cars = ["Firari", "Lada", "Mersedes", "Hyundai"];

let iDont = cars.unshift("Ziguli"); // добавляет элемент в начало массива, возвращает новую длину

console.log( cars ); // ...Ziguli
console.log( iDont ); // 5

let theFirstElement = cars.shift(); // удаляет первый элемент и возвращает его

console.log( cars ); // без Firari
console.log( theFirstElement ); // Firari

// Существует и другой вариант применения для массивов - структура данных, называемая стек.
// Она поддерживает два вида операций:
// - push - добавляет элемент в конец
// - pop - удаляет последний элемент
// Таким образом, новые элементы всегда добавляются или удаляются из "конца".
// Примером стека обычно служит колода карт: новые карты кладутся наверх и берутся тоже наверху.
// Массивы в JS могут работать и как очередь, и как стек. Мы можем добавлять/удалять элементы
// как в начало, так и в конец массива. 
// В компьютерных науках подобная структура данных (позволяющая такое делать) называется
// двустороння очередь (!)
let names = ["Tolya", "Nikita", "Pasha", "Dima"];

let a = names.push("Eduard"); // добавляет элемент в конец массива и возвращает новую длину

console.log( names ); // ...Eduard
console.log( a ); // 5 

let b = names.pop(); // удаляет последний элемент и возвращает его 

console.log( names ); // без Eduard
console.log( b ); // Eduard

// Внутренне устройство массива

// Массив - особый подвид объектов. Квадратные скобки, используемые для того, чтобы получить 
// доступ к свойству arr[0] - это по сути обычный синтаксис доступа по ключу, как obj[key], где в
// роли obj у нас arr, а в качестве ключа - числовой индекс.
// Массивы расширяют объекты, так как предусматривают специальные методы для работы с 
// упорядоченными коллекциями данных, а также свойство length. Но в сонвое все равно лежит объект!
// Следует помнить, что в JS существует 8 основных типов данных. Массив является объектом и, 
// следовательно, ведет себя как объект.
// Например, копируется по ссылке:
let arr3 = ["Apple"];
let arr4 = arr3;

console.log( arr3 === arr4 ); // true

arr3.push("Banana");

console.log( arr3 === arr4 ); // true, потому что массив меняется по ссылке

// Но что действительно делает массивы особенными - это их внутреннее представление. Движок
// JS старается хранить элементы массива в непрерывной области памяти, один зи другим, так, 
// как это показано на иллюстрациях к этой главе *смотри сайт*. Существуют и другие способы
// оптимизации, благодаря которым массивы работают очень быстро!
// Но все они утратят эффективность, если мы перестанем работать с массивом как с "упорядоченной
// коллекцией данных" и начнем использовать его как обычный объект :(

// Неправильное применение массива: (!)
// - добавление нечислового свойства, например: arr.test = 5;
// - создание "дыр", например: добавление arr[0], затем arr[1000] (между ними ничего нет);
// - заполнение массива в обратном порядке, например: arr[1000], arr[999] и так далее.

// Массив следует считать особой структурой, позволяющей работать с упорядоченными данными!
// Для этого массивы предоставляют специальные методы. Массивы тщательно настроены в движках JS для
// работы с однотипными упорядоченными данными, поэтому следует использовать именно их. А если 
// нужны произвольные ключи, лучше подойдет обычный объект {}

// Эффективность (!)

// Методы push/pop - быстрые, а shift/unshift - медленные
// Почему же работать с концом массива быстрее, чем с его началом? Давайте посмотрим, что 
// происходит во время выполнения:
fruits.shift(); // удаляем первый элемент с начала
// Просто взять и удалить элемент с номером 0 недостаточно. Нужно также заново пронумеровать
// остальные элементы. Операция shift выполняет 3 действия:
// - Удалить элемент с индексом 0 
// - Сдвинуть все элементы влево, заново пронумеровать их, заменив 1 на 0, 2 на 1 и так далее
// - Обновить свойство length
// Чем больше элементов содержит массив, тем больше времени потребуется для того, чтобы их
// переместить, больше операция с памятью!
// То же самое происходит с unshift: чтобы добавить элемент в начало массива, нам нужно сначала
// сдвинуть существующие элементы вправо, увеличивая их индексы.
// А что же с push/pop? Там же ничего не нужно перемещать, так как элементы добавляются или 
// удаляются в конце массива, уменьшается значение length

// Перебор элементов 

// Одним из самых старых способов перебора элементов массива является цикл for по цифровым
// индексам: 
let arr5 = ["Roma", "Peter", "Antonio"];

for (let i = 0; i < arr5.length; i++) {
    console.log ( arr5[i] );
} // Roma, Peter, Antonio
// Но для массива возможен и другой вариант цикла, for..of:
for (let name of arr5) {
    console.log( name );
} // Roma, Peter, Antonio
// Цикл for..of не предоставляет доступа к номеру текущего элемента, только к его значению, но в
// большинстве случаев этого достаточно. А также это короче!
// Технически можно даже писать for..in, но лучше не стоит по ряду причин =>
// Для массивов используем for...of

// Немного о "length"

// Свойство length автоматически обновляется при изменении массива. Если быть точными, это не
// количество элементов массива, а наибольший цифровой индекс плюс один.
// Например, единственный элемент, имеющий большой индекс, дает большую длину:
let example3 = [];

example3[125] = "Haha, error";

console.log( example3.length ); // 126
// При этом обычно мы не используем массивы подобным образом, ведь массивы - это упорядоченная
// коллекция данных!
// Еще один интересный факт о свойстве length - его можно перезаписать!
// Если мы вручную увеличи его, ничего интересного не произойдет. Зато, если мы уменьшим его, 
// массив станет короче. Этот процесс необратим, как мы можем понять из примера ниже:
let example4 = [1, 2, 3, 4];

example4.length = 2; // укорачиваем массив до двух элементов

console.log( example4.length ); // 2
console.log( example4 ); 1, 2

example4.length = 4;

console.log( example4.length ); // 4
console.log( example4 ); // 1, 2, остальные элементы не вернулись!

// new Array()

// Существует еще один вариант синтаксиса для создания массива, о нем мы говорили в начале:
let new_arr = new Array(2); // создастя ли массив [2]?

console.log( new_arr[0] ); // undefined! нет элементов
console.log( new_arr.length ); // 2 и почему же?
// В представленном выше примере массив состоит из 2 элементов, при этом каждый из них равен
// undefined. Чтобы не получить подобный результат, обычно используются квадратные скобки

// Многомерные массивы

// Массивы могут содержать элементы, которые тоже являются массивами. Это можно использовать для
// создания многомерных массивов, например, для хранения матриц:
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log( matrix[1][2] ); // 6

// toString

// Массивы по-своему реализуют метод toString, который возвращает список элементов, 
// разделенных запятыми. Например:
let example5 = [1, 2, 5];

console.log( example5 ); // 1, 2, 5
console.log( String(example5) === "1,2,5" ); // true
// В общем, также при записи а-ля
console.log( [1,2] + 1); // 1,21
// будет такой же результат как и при
console.log( "1,2" + 1); // 1,21

/////////////////////////////////////////////
///////////// Questions (3/5) ///////////////
/////////////////////////////////////////////

// Скопирован ли массив?
// Яблоки, груша, апельсин, банан = 4

// Операции с массивами
let styles = ["Jazz", "Bluz"];

styles.push("Rock-N-Roll");

function changeKey(array) {
    array[Math.ceil(array.length / 2 - 1)] = "Classic";

    return array;
}

changeKey(styles);

console.log( styles );

console.log( styles.shift() );

styles.unshift("Rap", "Reggi");

console.log( styles );

// Вызов в контексте массива (!)
// Результатом будет arr.push(function)
// А вот и нет, он выведет на экран "a", "b", function, потому что
// this относится к arr

// Сумма выведенных чисел
/*let answer;

function sumInput() {
    let arr = [];
    let answer = 0;

    while (true) {
        answer = +prompt( "Enter a value", "" );

        if (answer == "" || answer == null || !isFinite(answer)) break;

        arr.push(answer);
    }   

    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }

    return answer;
}

alert( sumInput() );*/

// Подмассив наибольшей суммы (!)
/*let arr7 = [2, -1, 2, 3, -9];

function getMaxSubSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let answer = [];

        if ([i] + [i + 1] == arr[i + 2]) {
            console.log(arr[i]);
            answer.push(arr[i]);
            console.log(answer[i]);
        }

        sum += answer[i];
    }

    return sum;
}

console.log( getMaxSubSum(arr7) );*/