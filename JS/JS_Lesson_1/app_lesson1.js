// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

let EXAMPLE1 = [1,0,6,0,3];
let arr = [];
let numbers = [];

function F1() {
    for ( let i = 0; i < EXAMPLE1.length; i++) {
      if ( EXAMPLE1[i] === 0 ) {numbers.push(EXAMPLE1[i]);}
      else {arr.push(EXAMPLE1[i]);}
   }
    numbers.unshift(arr);
}
F1();
document.write(`<div>${numbers}</div>`);


let EXAMPLE2 =[0,1,2,3,4];
let arr2 = [];
let numbers2 = [];

function F2() {
    for ( let i = 0; i < EXAMPLE2.length; i++) {
        if ( EXAMPLE2[i] === 0 ) {numbers2.push(EXAMPLE2[i]);}
        else {arr2.push(EXAMPLE2[i]);}
    }
    numbers2.unshift(arr2);
}
F2();
document.write(`<div>${numbers2}</div>`);

let EXAMPLE3 =[0,0,1,0];
let arr3 = [];
let numbers3 = [];

function F3() {
    for ( let i = 0; i < EXAMPLE3.length; i++) {
        if ( EXAMPLE3[i] === 0 ) {numbers3.push(EXAMPLE3[i]);}
        else {arr3.push(EXAMPLE3[i]);}
    }
    numbers3.unshift(arr3);
}
F3();
document.write(`<div>${numbers3}</div>`);