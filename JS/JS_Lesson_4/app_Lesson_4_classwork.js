// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function Min(a, b, c) {
    let min = arguments[0];
    let max = arguments[0];
    for (const item of arguments) {
        if ( item < min ) min = item;
        if ( item > max ) max = item;
    }
    console.log(min);
    return max;
}
Min(10, 45, 22)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function Max(a, b, c) {
    let min = arguments[0];
    let max = arguments[0];
    for ( let item of arguments) {
        if ( item < min ) min = item;
        if ( item > max ) max = item;
    }
    console.log(max);
    return min;
}
Max (5, 23, 7);

// - створити функцію яка повертає найбільше число з масиву

let Array1 = [55, 43, 25, 13, 18, 94, 174, 63, 12, 82, 91, 21, 32, 43, 54, 65, 76, 87, 98, 34, 45, 55];
function ArrayMax() {
    let min =Array1[0];
    let max = Array1[0];
    for (let i = 0; i < Array1.length; i++) {
        let max1 = Array1[i];
        if ( max1 < min) min = max1;
        if ( max1 > max) max = max1;
    }
    console.log(max);
    return min;
}
ArrayMax();

// - створити функцію яка повертає найменьше число з масиву
let Array2 = [55, 43, 5, 13, 18, 94, 174, 63, 88, 82, 91, 21, 32, 43, 54, 65, 76, 87, 98, 34, 45, 55];
function ArrayMin() {
    let min = Array2[0];
    let max = Array2[0];
    for (const min1 of Array2) {
        if ( min1 < min ) min = min1;
        if ( min1 > max ) max = min1;
    }
    console.log(min);
    return max;
}
ArrayMin();

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let Array3 = [55, 43, 27, 13, 18, 94, 174, 63, 12, 82, 91, 21, 32, 43, 54, 65, 76, 87, 98, 34, 45, 55];
function Sum() {
    let sum = 0;
    for (const argument of Array3) {
        sum +=argument;
    }
    console.log(sum);
}
Sum();

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let Array4 = [55, 43, 27, 13, 18, 94, 174, 63, 12, 82, 91, 21, 32, 43, 54, 65, 76, 87, 98, 34, 45, 55];
function Average() {
    let aver = 0;
    let sum = 0;
    for (let i = 0; i < Array4.length; i++) {
        const argument = Array4[i];
        sum += argument;
        aver = sum/Array4.length;
    }
    console.log(aver);
}
Average();
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);
function Num(arr) {
    let min = arr[0];
    let max = arr[0];
    for (const arrEl of arr) {
        if (arrEl < min ) min = arrEl;
        if ( arrEl > max ) max = arrEl;
    }
    console.log(min);
    return max;
}
Num([12, 67, 8, 46, 78, 14])

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
RanArray = [];
function Random() {
    for (let i = 0; i < 10; i++) {
        RanArray.push(Math.round(Math.random()*100));
    }
    console.log(RanArray);
   }
Random();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
RanArray2 = [];
function Random2(limit) {
    for (let i = 0; i < limit; i++) {
        RanArray2.push(Math.round(Math.random()*100));
    }
    console.log(RanArray2);
}
Random2(5);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let Test3 = [1,2,3];
let revArr = [];
function Rev(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        const ranArrayElement = arr[i];
        revArr.push(ranArrayElement);
    }
    console.log(revArr);
}
Rev(Test3);
