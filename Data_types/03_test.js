'use strict';

// 1
function ucFirst(str) {
    if (str.length != 0) {
        let answer = str[0].toUpperCase();

        for(let i = 1; i < str.length; i++) {
            answer += str[i];
        }

        return answer;
    } else {
        return '';
    }
}

let example = '';

console.log( ucFirst(example) );

// 2
function checkSpam(str) {
    for(let i = 0; i < str.length; i++) {
        if (
            (str[i] == 'V' || str[i] == 'v') &&
            (str[i + 1] == 'I' || str[i + 1] == 'i') &&
            (str[i + 2] == 'A' || str[i + 2] == 'a') &&
            (str[i + 3] == 'G' || str[i + 3] == 'g') &&
            (str[i + 4] == 'R' || str[i + 4] == 'r') &&
            (str[i + 5] == 'A' || str[i + 5] == 'a')
            ) 
        {
            return true;
        };

        if (
            (str[i] == 'X' || str[i] == 'x') &&
            (str[i + 1] == 'X' || str[i + 1] == 'x') &&
            (str[i + 2] == 'X' || str[i + 2] == 'x')
            )
        {
            return true;
        };
    }

    return false;
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

// 3
function truncate(str, maxLength) {
    let answer = '';

    for (let i = 0; i < maxLength - 1 && i < str.length; i++) {
        answer += str[i];
    }

    if (str.length > maxLength) {
        answer += String.fromCharCode(8230);
    }

    return answer;
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

// 4
function extractCurrencyValue(str) {
    let answer = '';

    for (let i = 1; i < str.length; i++) {
        answer += str[i];
    }

    return +answer;
}

console.log(extractCurrencyValue('$120')); // true