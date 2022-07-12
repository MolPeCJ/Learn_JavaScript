// 1
/*let a = +prompt( "Enter the first number", "" );
let b = +prompt( "Enter the second number", "" );
let sum = a + b;
console.log( sum.toFixed() );*/

// 2
// Следует использовать встроенную функцию Math.ceil() 
console.log( Math.ceil(6.35 * 10) / 10 );

// 3
function readNumber() {
    while (true) {
        let num = prompt( "Enter the number", "" );

        if (num == null || num == "") break;
        if (isFinite(num) == 'true') break;
    }

    return +num;
}

// 4, цикл никогда не завершится потому, что 0.2 + 0.1 != 0.3, а будт 0.3000...4, то есть, надо ставить < 10
/*let i = 0;
while (i != 10) {
  i += 0.2;
}*/

// 5 
function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log( random(1, 3) );

// 6 
// Следует использовать Math.floor(), max + 1 - min в правой части выражения