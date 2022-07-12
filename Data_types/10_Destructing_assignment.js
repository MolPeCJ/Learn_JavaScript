// Случается, что требуется запись в переменную или для передачи в функцию не всего объекта/
// массива целиком, а элемента(ов) в отдельности. 
// Тут на помощь и приходит деструктурирующее присваивание! Это специальный синтаксис, который
// позволяет нам "распаковывать" массивы или объекты в несколько переменных, так как иногда
// они более удобны.

// Деструктуризация массива
let arr = ["Ilya", "Kantor", "Example", "Tsar"];

let [firstName, surname, , title] = arr; // пропускаем ненужные элементы через запятую

console.log(firstName); // Ilya
console.log(surname); // Kantor
console.log(title); // Tsar

// Это просто короткий вариант записи:
let firstNameLong = arr[0];
let surnameLong = arr[1];

