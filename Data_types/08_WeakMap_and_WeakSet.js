let visitsCountMap = new Map(); // map: пользователь => число визитов

// увеличиваем счётчик
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let john = { name: "John" };

countUser(john);

john = null;

console.log( visitsCountMap.has(john) );

// Кеширование

let cache = new WeakMap();

// вычисляем и запоминаем результат
function process(obj) {
  if (!cache.has(obj)) {
    let result = /* тут какие-то вычисления результата для объекта */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// Теперь используем process() в другом файле:

let obj = {/* допустим, у нас есть какой-то объект */};

let result1 = process(obj); // вычислен результат

// ...позже, из другого места в коде...
let result2 = process(obj); // ранее вычисленный результат взят из кеша

// ...позже, когда объект больше не нужен:
obj = null;

console.log( cache.size ); // 1 (Упс! Объект всё ещё в кеше, занимает память!)
// ~ undefined

// WeakSet

let visitedSet = new WeakSet();

let john1 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john1); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john1); // John снова

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?
console.log( visitedSet.has(john1) ); // true

// проверим, заходила ли Mary?
console.log( visitedSet.has(mary) ); // false

john1 = null;

console.log( visitedSet.has(john1) ); // false

// структура данных visitedSet будет очищена автоматически

console.log(
`\n----------------------
|    Задачи (2/2)    |
----------------------\n`);

// Хранение отметок "не прочитано"
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let haveMessages = new WeakSet(); // правильно!

// Хранение времени прочтения
let messages1 = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let readMessages = new WeakMap(); // правильно!