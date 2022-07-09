// 1, надо лишь создать объект, ссылаться на которой и будут конструкторы
let example = {
    name: "Tolya"
};

function A() {
    return example;
}

function B() {
    return example;
}

let a = new A;
let b = new B;

console.log ( a == b );

// 2
function Calculator() {
    return {
        read() {
            this.a = +prompt( "What is the first number?", "" );
            this.b = +prompt( "What is the second number?", "" );
        },
        sum() {
            return this.a + this.b;
        },
        mul() {
            return this.a * this.b;
        }
    }
};

// 3 -  не забывай про this.*
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() { // этот же способ можно использовать в калькуляторе
        this.value += +prompt( "Enter the number", "" );
    }
}