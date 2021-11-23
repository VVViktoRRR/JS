document.write(`<div><h4></h4></div>`);

document.write(`<div><h2>Всі функції повинні бути описані стрілочним типом!!!</h2></div>`);
//=====================================================================================================================
document.write(`<div><h4>- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)</h4></div>`);

let minNumber = (a, b, c)=> {
if (a < b && a < c ) {
    console.log(a);
    document.write(`<div><h4> min = ${a}</h4></div>`);
    } else
if (b < a && b < c) {
    console.log(b);
    document.write(`<div><h4> min = ${b}</h4></div>`);
} else
if ( c < a && c < b ) {
    console.log(c);
    document.write(`<div><h4> min = ${c}</h4></div>`);
} else {
    return 0;
    }
}
minNumber(5, 10, 15);


//=====================================================================================================================
document.write(`<hr><div><h4>- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)</h4></div>`);

let maxNumber = (a, b, c)=> {
    if (a > b && a > c ) {
        console.log(a);
        document.write(`<div><h4> max = ${a}</h4></div>`);
    } else
    if (b > a && b > c ) {
        console.log(b);
        document.write(`<div><h4> max = ${b}</h4></div>`);
    } else
    if ( c > a && c > b ) {
        console.log(c);
        document.write(`<div><h4> max = ${c}</h4></div>`);
    } else {
        return 0;
    }
}
maxNumber(5, 10, 15);
//=====================================================================================================================
document.write(`<hr><div><h4>- створити функцію яка повертає найбільше число з масиву</h4></div>`);

let F1 = (numbers) => {
    let min = numbers[0];
    let max = numbers[0];
    for (const item of numbers) {
        if (item < min) min = item;
        if (item > max) max = item;
    }
    console.log(max);
    document.write(`<div><h4> max =  ${max}</h4></div>`);
    return min;
}
F1([5, 10, 3]);
//=====================================================================================================================
document.write(`<hr><div><h4>- створити функцію яка повертає найменьше число з масиву</h4></div>`);

let F2 = (numbers) => {
    let min = numbers[0];
    let max = numbers[0];
    for (const item of numbers) {
        if (item < min) min = item;
        if (item > max) max = item;
    }
    console.log(min);
    document.write(`<div><h4> min =  ${min}</h4></div>`);
    return max;
}
F2([5, 10, 3]);
//=====================================================================================================================
document.write(`<hr><div><h4>- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. <br>
                                Приклад [1,2,10]->13</h4></div>`);


let sumArr = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    console.log(sum);
    document.write(`<div><h4> sum = ${sum}</h4></div>`);
}
sumArr([1, 2, 10]);

//=====================================================================================================================
document.write(`<hr><div><h4>- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.</h4></div>`);


let SumArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        sum += arrElement/arr.length;
    }
    console.log(sum);
    document.write(`<div><h4> sum = ${sum}</h4></div>`);
}
SumArr([55, 43, 27, 13, 18, 94, 174, 63, 12, 82, 91, 21, 32, 43, 54, 65, 76, 87, 98, 34, 45, 55]);

//=====================================================================================================================
document.write(`<hr><div><h4>- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, <br> 
                                а виводить найбільше (Math використовувати заборонено);</h4></div>`);

let oneArr = (arr) => {
    let min = arr[0];
    let max = arr[0];
    for (const max1 of arr) {
        if ( max1 < min ) min = max1;
        if ( max1 > max ) max = max1;
    }
    console.log(max);
    document.write(`<div><h4> max  = ${max}</h4></div>`);
    return min;
}
oneArr([55, 43, 27, 13, 18, 94, 174, 63, 12, 82, 91, 21, 32, 43, 54, 65, 76, 87, 98, 34, 45, 55])
//=====================================================================================================================
document.write(`<hr><div><h4> - створити функцію яка заповнює масив рандомними числами <br>
     (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
     </h4></div>`);

RandomArr = [];
let Ran = (n) => {
    for (let i = 0; i < n; i++) {
        RandomArr.push(Math.round(Math.random()*100));
    }
    console.log(RandomArr);
    document.write(`<div><h4>[ ${RandomArr}]</h4></div>`);
}
Ran(10);

//=====================================================================================================================
document.write(`<hr><div><h4> - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.</h4></div>`);

RandomArr2 = [];
let Run2 = (n, limit) => {
    for (let i = 0; i < n; i++) {
        RandomArr2.push(Math.round(Math.random()*limit));
    }
    console.log(RandomArr2);
    document.write(`<div><h4>[ ${RandomArr2}]</h4></div>`);
}
Run2(20, 50);

//=====================================================================================================================
document.write(`<hr><div><h4>- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].</h4></div>`);


let TestArr = [];
let RevArr = (...arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        const arrElement = arr[i];
        TestArr.push(arrElement);
       }
    console.log(TestArr);
    document.write(`<div><h4>[ ${TestArr}]</h4></div>`);
}
RevArr(1, 2, 3);
