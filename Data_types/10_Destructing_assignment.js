// Случается, что требуется запись в переменную или для передачи в функцию не всего объекта/
// массива целиком, а элемента(ов) в отдельности. 
// Тут на помощь и приходит деструктурирующее присваивание! Это специальный синтаксис, который
// позволяет нам "распаковывать" массивы или объекты в несколько переменных, так как иногда
// они более удобны.

// Деструктуризация массива
console.log(
`\n----------------------------------
|    Деструктуризация массива    |
----------------------------------\n`);

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
console.log(
`\n------------------------------------
|    Остаточные параметры '...'    |
------------------------------------\n`);

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
console.log(
`\n-------------------------------
|    Значения по умолчанию    |
-------------------------------\n`);

// Если в массиве меньше значений, чем в присваивании, то ошибки не будет. Отсутствующие значения
// считаются неопределенными: 
let [firstName1, surname1] = [];

console.log(firstName1); // undefined

// Если необходимо указать значения по умолчанию, то нужно использовать '=':
let [name3 = 'Guest', surname3 = 'Anonymous'] = ['Julius'];

console.log(name3); // Julius

// Деструктуризация объекта
console.log(
`\n----------------------------------
|    Деструктуризация объекта    |
----------------------------------\n`);

// У нас есть существующий объект с правой стороны, который мы хотим разделить на переменные.
// Левая торона содержит "шаблон" для соответствующих свойств В простом случае это список
// названий переменных в {...}

let options = {
    title1: "Menu",
    width: 100,
    height: 200
};
  
let {title1, width, height} = options; // но названия переменных должны совпадать со свойствами

console.log(title1, width); // Menu 100

// Если мы хотим присвоить свойство объекта переменной с другим названием, то надо 
// использовать двоеточие: 

let {title1: a, width: b, height: c} = options;

console.log(a, b, c); // Menu 100 200

// Двоеточие показыывает "что: куда идет"! Для потенциально отсутствующих свойств мы можем установить
// значения по умолчанию, используя "=", как здесь: 
let options2 = {
    title2: 'Menu'
};

let {width2 = 100, height2 = 100, title2} = options2;

console.log(width2, title2); // 100, Menu

// Мы также можем совмещать ':' и '=': 
let options3 = {
    title3: 'Menu'
};

let {width3: w3 = 200, title3: t3} = options3;

console.log(w3, t3); // 100 Menu

// Остаток объекта '...'
console.log(
`\n-------------------------
|    Остаток объекта    |
-------------------------\n`);

// Если в объекте больше свойств, чем у нас переменных, которые мы объявляем, то оставшиеся
// свойства можно присвоить массиву с использованием '...'

let options4 = {
    title: 'Menu',
    height: 200,
    width: 100
};

let {title: t4, ...rest4} = options4;

console.log(t4, rest4); // Menu { height: 200, width: 100 }

// (!) При этом важно помнить, что если мы объявим переменные не в присваивании let {} = {}, а 
// раньше, то не стоит забывать про дополнительные скобки, так как JS считает это все одним блоком кода

let title5, height5;

({title5, height5} = {title5: 100, height5: 200}); // Дополнительные скобки по бокам!

console.log(title5, height5); // 100 200

// Вложенная деструктуризация
console.log(
`\n------------------------------------
|    Вложенная деструктуризация    |
------------------------------------\n`);

// Если объект или массив содержит другие вложенные объекты или массивы, то мы можем
// использовать более сложные шаблоны с левой стороны, чтобы извлечь более глубокие свойства.
// В приведенном ниже коде 'options6' хранит другой объект в свойстве 'size6', например, 
// и вот как будет реализована левая часть: 

let options6 = {
    size6: {
      width6: 100,
      height6: 200
    },
    items6: ["Cake", "Donut"],
    extra6: true
};
  
  // деструктуризация разбита на несколько строк для ясности
let {
    size6: { // положим size сюда
      width6,
      height6
    },
    items6: [item1, item2], // добавим элементы к items
    title6 = "Menu" // отсутствует в объекте (используется значение по умолчанию)
} = options6;

console.log(width6, height6, item1, item2, title6); // 100 200 Cake Donut Menu

// Заметим, что size6, items6, extra6 отсутствуют, так как мы или брали глубокие свойства,
// или вовсе не присваивали одно из свойств переменной (extra6)

// Умные параметры функций
console.log(
`\n---------------------------------
|    Умные параметры функций    |
---------------------------------\n`);

// Есть ситуации, когда функция имеет много параметров, большинство из которых не обязательны. 
// Это особенно верно для пользовательских интерфейсов. Представьте себе функцию, которая создает
// меню. Она может иметь ширину, высоту, заголовок, список элементов и так далее. 
// Сейчас будет пример плохой функции: 

// function showMenu(title = 'Untitle', width = 200, height = 100, items = []) {}

// мы передаём объект в функцию
let options7 = {
    title7: "My menu",
    items7: ["Item1", "Item2"]
};
  
  // ...и она немедленно извлекает свойства в переменные
function showMenu({title7 = "Untitled", width7 = 200, height7 = 100, items7 = []}) {
    // title, items – взято из options,
    // width, height – используются значения по умолчанию
console.log( `${title7} ${width7} ${height7}` ); // My Menu 200 100
console.log( items7 ); // Item1, Item2
}
  
showMenu(options7);
showMenu({}); // если мы хотим все значения по умолчанию, то передаем пустой объект

console.log(
`\n-----------------------
|    Вопросы (2/2)    |
-----------------------\n`);

// Деструктурирующее присваивание

let user = {
    name: "John",
    years: 30
};

let {name: myName, years: age, isAdmin = false} = user;

console.log(myName, age, isAdmin);

// Максимальная зарплата

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let array = Object.entries(salaries);

    if (array.length == 0) {
        return null;
    }

    let {John, Pete, Mary} = salaries;

    if (John >= Pete && John >= Mary) {
        return 'John';
    }

    if (Pete >= John && Pete >= Mary) {
        return 'Pete';
    }

    if (Mary >= John && Mary >= Pete) {
        return 'Mary';
    }

}

console.log( topSalary(salaries) );

// А теперь хорошо написанное универсальное решение задачи

function topSalary_right(salaries) {
    let max = 0;
    let maxName = null;

    for (let [name, salary] of Object.entries(salaries)) { // вот именно так и перебираются объекты в массиве
        if (salary > max) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}

console.log( topSalary_right(salaries) );