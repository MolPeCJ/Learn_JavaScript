// 1
// Важна точка с запятой, от ее наличия зависит многое, в какой уже раз повторяю!

// 2
// Reference Type 

// 3
// Вызов несуществующего свойства, а также вызов свойства объекта после вызова метода

// 4
let calculator = {
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
};

calculator.read();
console.log ( calculator.sum() );
console.log ( calculator.mul() );

// 5, тут мы добавляем return this, чтобы каждый раз применять метод к обновленному объекту
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() {
      console.log( this.step );
    }
};