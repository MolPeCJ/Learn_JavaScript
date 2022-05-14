"use strict";
// Методы массивов

// Массивы предоставляют множество методов. Чтобы было проще понять, в этом уроке они разбиты
// на группы

// Добавление/удаление элементов

// Помимо уже известных нам способов добавление элемента в массив (push, pop, shift, unshift),
// существуют и другие

// splice

// Как удалить элемент из массива?
// Так как массивы - это объекты, то можно попробовать delete:
let arr = ["I", "go", "home"];

delete arr[1]; // удалить "go"

console.log( arr.length ); // 3?
// Вроде бы элемент и был удален, но при проверке оказывается, что массив все еще имеет 3
// элемента!
// Это нормально, потому что все, что делает delete obj.jey - удаляет значение с данным ключом
// key. Это нормально для объектов, но для массивов мы же хотим, чтобы оставшиеся элементы
// сдвинулись и заняли освободившееся место. Мы ждем, что массив станет короче

// Именно для этого и существуют специальные методы, сейчас мы поговорим про splice

// Метод arr.splice(str) - это универсальный "швейцарский нож" для работы с массивами. 
// Умеет все: добавлять, удалять и заменять элементы.
// arr.splice(index[, deleteCount, elem1 ..., elemN]);
// Он начинает с позиции index, удаляет deleteCount элементов и вставляет elem1, ..., elemN
// на их место. Возвращает массив из удаленных элементов
let arr1 = ["I", "like", "animals"];

arr1.splice(1, 1);

console.log( arr1 ); // "I", "animals"
// Начиная с позиции 1, он убрал 1 элемент
let arr2 = ["What", "is", "your", "favourite", "food", "?"];

arr2.splice(3, 2, "the best", "experience");

console.log( arr2 ); // "What", "is", "your", "the best", "experience", "?"
// Тут мы заменили 2 элемента начиная с 3-й позиции 
let arr3 = ["I", "am", "learning", "JS", "right now"];

let result = arr3.splice(0, 4, "Let's", "dance");

console.log( arr3 ); // "Let's", "dance", "right now"
console.log( result ); // splice возвращает массив удаленных элементов

arr3.splice(1, 0, "study"); // добавляем study на место 1-ого элемента, где до этого был dance

console.log( arr3 ); // "Let's, "study", "dance", "right now"

let arr4 = ["My", "fucking", "world"];

arr4.splice(-1, 0, "beautiful");

console.log( arr4 ); // "My", "fucking", "beatiful", "world"

// Метод arr.slice([start], [end]) - возвращает новый массив, в который копирует элементы, начиная
// с индекс start и до end (не включительно). Оба индекса могут быть отрицательными. В таком случае
// отсчет будет начинаться с конца массива. 
// Можно вызвать slice вообще без аргументов - arr.slice(). Это создаст копию массива arr. Часто
// используется для простого создания копии!

let copie = arr4.slice();

console.log( copie ); // "My", "fucking", "beatiful", "world"

// Метод arr.concat(arg1, arg2) - создает новый массив из элементов аргументов или же значений, 
// поступивших в качестве аргументов

let arr5 = [1, 2];

console.log( arr5.concat(3, 4, [5]) ); // 1, 2, 3, 4, 5

let externalValues = {
    0: 'some',
    1: 'info',
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log( arr5.concat(externalValues) ); // 1, 2, 'some', 'info'

// Перебор: forEach
// Позволяет запускать функцию для каждого элемента массива

let arr6 = ['Bibo', 'Boba', 'Alexei'];

arr6.forEach((item, index, array) => {
    console.log( `${item} has a ${index} position in ${array}` );
});
// Bibo has a 0 position in Bibo,Boba,Alexei
// Boba has a 1 position in Bibo,Boba,Alexei
// Alexei has a 2 position in Bibo,Boba,Alexei

// Поиск в массиве 
// Методы indexOf, lastIndexOf, includes
let arr7 = [0, 1, 2, 3];

console.log( arr7.indexOf(2, 0) ); // 2
console.log( arr7.lastIndexOf(2, -1) ); // 2
console.log( arr7.includes(2) ); // true

let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let user = users.find(function (item) {
      if (item.id == 2) {
          return item;
      }
  });
  
  console.log(user.name); // Вася