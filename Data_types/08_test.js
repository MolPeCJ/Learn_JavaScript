'use strict';

// 1
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

// Считаю, надо использовать структуру данных WeakMap (!)
// Для проверки факта прочтения следует использовать WeakSet, так как если 
// пользовать прочитает сообщение дважды, то не следует добавлять в структуру два
// одинаковых элемента: 
let readMessages = new WeakSet();

readMessages.add(messages[0]); // прочитали 1-е сообщение

readMessages.add(messages[2]); // прочитали 3-е сообщение

readMessages.add(messages[1]); // еще раз прочитали 1-е сообщение, но при этом без доб. элемента

console.log(readMessages.has(messages[0])); // true
console.log(readMessages.has(messages[2])); // true

messages.shift();

console.log(readMessages.has(messages[2])); // false, самоочищение структуры данных

// 2
let messages2 = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

let dateReadingMessages = new WeakMap();

dateReadingMessages.set(messages2[0], new Date(2017, 1, 1));

console.log(dateReadingMessages.has(messages2[0])); // true

console.log(dateReadingMessages.get(messages2[0])); // ДАННЫЕ!