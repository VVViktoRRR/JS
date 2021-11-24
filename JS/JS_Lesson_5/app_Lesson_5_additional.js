document.write(`<div><h3>- Дано натуральное число n. Выведите все числа от 1 до n.</h3></div>`);

let Test = [];
let Arr = (n) => {
    for (let i = 0; i <= n; i++) {
            console.log(i);
            Test.push([i]);

        }
    document.write(`<div><h4>[ ${Test} ]</h4></div>`);
}
Arr(20);
//======================================================================================================================
document.write(`<hr><div><h3>- Даны два целых числа A и В . Выведите все числа от A до B включительно, <br>
                в порядке возрастания, если A < B, или в порядке убывания в противном случае.</h3></div>`);
let comparison = (a, b) => {
    if ( a < b) {
        for (let i = a+1; i < b; i++) {
            console.log(i);
            document.write(`<div><h4><li>${i}</li></h4></div>`);
    }
    } else if ( a > b) {
        for (let i = a-1; i > b; i--) {
            console.log(i);
            document.write(`<div><h4><li>${i}</li></h4></div>`);
        }
    } else  {
        console.log(0);
        document.write(`<div><h4><li> 0 </li></h4></div>`);
   }
}
comparison(12,2);

//======================================================================================================================
document.write(`<hr><div><h3>-функція Приймає масив та число "i", та міняє місцями обєкт який знаходиться в індексі "i" на "i+1" <br>
EXAMPLE: <br>
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]<br>
  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]<br>
  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ] </h3></div>`);

let foo1 = [9,8,0,4];
Test1 =(k)=> {
    foo1.splice(k,1);
    foo1.splice(k+1, 0, 9);
    console.log(foo1);
    document.write(`<div><h3>[ ${foo1} ]</h3></div>`);
}
Test1(0);
//------------------------------------------------------
let foo2 = [9,8,0,4];
Test2 =(k)=> {
    foo2.splice(k,1);
    foo2.splice(k+1, 0, 8);
    console.log(foo2);
    document.write(`<div><h3>[ ${foo2} ]</h3></div>`);
}
Test2(1);
//------------------------------------------------------
let foo3 = [9,8,0,4];
Test3 =(k)=> {
        foo3.splice(k,1);
        foo3.splice(k+1, 0, 0);
        console.log(foo3);
        document.write(`<div><h3>[ ${foo3} ]</h3></div>`);
}
Test3(2);


//======================================================================================================================
document.write(`<hr><div><h3>- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень. <br>
Двожина масиву від 2 до 100<br>
EXAMPLE: <br>
  [1,0,6,0,3] => [1,6,3,0,0]<br>
  [0,1,2,3,4] => [1,2,3,4,0]<br>
  [0,0,1,0]   => [1,0,0,0] </h3></div>`);

let EXAMPLE1 = [1,0,6,0,3];
EX1 = () => {
    EXAMPLE1.splice(1, 1);
    EXAMPLE1.splice(2, 1);
    EXAMPLE1.splice(3, 0, 0, 0);
    console.log(EXAMPLE1);
    document.write(`<div><h3>[ ${EXAMPLE1} ]</h3></div>`);
}
EX1();
//---------------------------------------------------------------------
let EXAMPLE2 = [0,1,2,3,4];
EX2 = () => {
    EXAMPLE2.splice(0, 1);
    EXAMPLE2.splice(4, 0, 0);
    console.log(EXAMPLE2);
    document.write(`<div><h3>[ ${EXAMPLE2} ]</h3></div>`);
}
EX2();
//---------------------------------------------------------------------
let EXAMPLE3 = [0,0,1,0];
EX3 = () => {
    EXAMPLE3.splice(2, 1);
    EXAMPLE3.splice(0, 0, 1);
    console.log(EXAMPLE3);
    document.write(`<div><h3>[ ${EXAMPLE3} ]</h3></div><hr>`);
}
EX3();
//==========================================================================

let EXAMPLE11 = [1,0,6,0,3];
let arr11 = [];
let numbers = [];

function F11() {
    for ( let i = 0; i < EXAMPLE11.length; i++) {
        if ( EXAMPLE11[i] === 0 ) {numbers.push(EXAMPLE11[i]);
        }
        else {arr11.push(EXAMPLE11[i]);
        }
    }
    numbers.unshift(arr11);
}
F11();
document.write(`<div><h3>[ ${numbers} ]</h3></div>`);


let EXAMPLE22 =[0,1,2,3,4];
let arr2 = [];
let numbers2 = [];

function F22() {
    for ( let i = 0; i < EXAMPLE22.length; i++) {
        if ( EXAMPLE22[i] === 0 ) {numbers2.push(EXAMPLE22[i]);
        }
        else {arr2.push(EXAMPLE22[i]);
        }
    }
    numbers2.unshift(arr2);
}
F22();
document.write(`<div><h3>[ ${numbers2} ]</h3></div>`);

let EXAMPLE33 =[0,0,1,0];
let arr3 = [];
let numbers3 = [];

function F33() {
    for ( let i = 0; i < EXAMPLE33.length; i++) {
        if ( EXAMPLE33[i] === 0 ) {numbers3.push(EXAMPLE33[i]);
        }
        else {arr3.push(EXAMPLE33[i]);
        }
    }
    numbers3.unshift(arr3);
}
F33();
document.write(`<div><h3>[ ${numbers3} ]</h3></div>`);