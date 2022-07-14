// Случается, что требуется запись в переменную или для передачи в функцию не всего объекта/
// массива целиком, а элемента(ов) в отдельности. 
// Тут на помощь и приходит деструктурирующее присваивание! Это специальный синтаксис, который
// позволяет нам "распаковывать" массивы или объекты в несколько переменных, так как иногда
// они более удобны.

// Деструктуризация массива
console.log(`\n1 Деструктуризация массива\n`);

let arr = ["Ilya", "Kantor", "Example", "Tsar"];

let [firstName, surname, , title] = arr; // пропускаем ненужные элементы через запятую

console.log(firstName); // Ilya
console.log(surname); // Kantor
console.log(title); // Tsar

// Это просто короткий вариант записи:
let firstNameLong = arr[0];
let surnameLong = arr[1];
let titleLong = arr[3];

// Остаточные параметры
console.log(`\n1.1 Остаточные параметры '...'\n`);

// Если мы хотим не просто получить первые значения, но и собрать все остальные, то можем
// добавить еще один параметр, который получает остальные значения, используя оператор
// "остаточные параметры" - троеточие("..."):
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1);
console.log(name2);
console.log(rest[0]); // Consul
// Переменная rest является массивом из оставшихся элементов. 
// Вместо rest можно использовать любое другое название переменной.
// Она должна быть на последнем месте в деструктурирующем присваивании

// Значения по умолчанию
console.log(`\n1.2 Значения по умолчанию\n`);

// Если в массиве меньше значений, чем в присваивании, то ошибки не будет. Отсутствующие значения
// считаются неопределенными: 
let [firstName1, surname1] = [];

console.log(firstName1); // undefined

// Если необходимо указать значения по умолчанию, то нужно использовать '=':
let [name3 = 'Guest', surname3 = 'Anonymous'] = ['Julius'];

console.log(name3); // Julius

// В процессе 