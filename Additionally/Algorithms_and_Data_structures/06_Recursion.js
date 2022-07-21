// Рекурсия

let n = 8;

function factorial(n) {
    if (n === 1) return 1;

    return n * factorial(n - 1);
}

console.log(`\nФакториал ${n}: ${factorial(n)}`);

function fibonachi(n) {
    if (n === 1 || n === 2) return 1;

    return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(`Число Фибоначчи для ${n}: ${fibonachi(n)}\n`);