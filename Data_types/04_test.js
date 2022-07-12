// 1
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
console.log( fruits.length ); // 4, так как массивы при копировании ссылаются на одно и то же

// 2
let styles = ['Jazz', 'Bluz', 'lala'];
console.log(styles);
styles.push('Rock-N-Roll');
console.log(styles);
styles[Math.floor(styles.length / 2)] = 'Classic';
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift('Rap', 'Reggi');
console.log(styles);

// 3
let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2](); // Да, все верно, функция выведет сам массив

// 4
function sumInput() {
    let array = [];
    let answer;

    while (true) {
        let a = prompt( "Enter the number", "" );

        if (a == null || a == '') break;
        
        array.push(+a);
    }

    for (let number of array) {
        answer += number;
    }

    return answer;
}

// 5
// В ближайшем будущем 