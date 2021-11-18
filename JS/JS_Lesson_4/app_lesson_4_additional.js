// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

function Indicator(a, b) {
    if ( a !== null && b == null ) {
        console.log(`${a}`);
    }
    else
    if (a !== null && b !== null) {
        console.log(`${a} + ${b}`)
    }
}
Indicator('hello');
Indicator('hi', 'Okten');

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]

let Test1 = [1,2,3,4];
let Test2 = [2,3,4,5];
let Finish = [];
function SumArr() {
    for ( let i = 0; i < 4; i++) {
        Finish.push(Test1[i]+Test2[i]);
    }
    console.log(Finish);
}
SumArr();

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let EXAMPLE = [{name: 'Dima', age: 13}, {model: 'Camry'}];
let arr = [];
function F1() {
    for (const EXAMPLEKey of EXAMPLE) {
        for (const Key in EXAMPLEKey) {
            arr.push(Key);
        }
    }
    console.log(arr);
}
F1();
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
 let arr2 = [];
 function F2() {
     for (const argument of EXAMPLE) {
         for (const argumentElement in argument) {
         arr2.push(argument[argumentElement]);
         }
     }
 console.log(arr2);
 }
F2();


