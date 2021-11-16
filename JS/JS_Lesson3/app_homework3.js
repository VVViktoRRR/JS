// --створити масив з:
// - з 5 числових значень

let numArr = [1,5,7,9,11];

// - з 5 стічкових значень

let strArr = ['Viktor', 'Usenko', 'Odessa', 'Vaz', 'Toyota'];

// - з 5 значень стрічкового, числового та булевого типу

let allArr = [16, 4, 19, 84, 37, 'november', 'monday', 'otn', 'cold', 'wind', true, true, false, true, false];

// - та вивести його в консоль

console.log(numArr);
console.log(strArr);
console.log(allArr);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let emptyArr = [];
emptyArr[0] = 'Viktor';
emptyArr[1] = 'Usenko';
emptyArr[2] = 37;
emptyArr[3] = 'Odessa'
console.log(emptyArr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for ( let i = 0; i < 10 ; i++) {
    document.write('<div> Lorem ipsum dolor sit amet. </div>')
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let array1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
let iterator = array1.entries();

for ( let item of iterator) {
    document.write('<div>')
    document.write(`${item}`)
    document.write('</div>')
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write('<h1> Lorem ipsum dolor sit amet. </h1>');
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let a = 0;
let array20 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    '1zero', '1one', '1two', '1three', '1four', '1five', '1six', '1seven', '1eight', '1nine',];
while (a < array20.length) {
    document.write(`<h1> ${array20.indexOf(array20[a])} =  ${array20[a]}  </h1>`);
    a++;
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let number = [7, 1, 14, 23, 19, 3, 28, 16, 4, 18];
for ( i = 0; i < number.length; i++) {
       document.write(`<div>${number[i]}</div>`)
}
console.log(number);

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let string = ['путин - хуйло', 'Крым - это Украина', 'ЛНД и ДНР - пидарасы', 'кацaпы- гондоны',
    'москали - ещё хуже', 'Слава Украине', 'Смерь врагам', 'Порох - поц', 'Зеля не лучше', 'Всех бы чпокнул Ляшко']
for (i = 0; i < string.length; i++) {
    document.write(`<h2> ${string[i]} </h2>`);
}
console.log(string);

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let oneArray = [15, 'november', 27, 'holiday', 'sun', 37, 42, true, 'work', false]
for ( i = 0; i < oneArray.length; i++) {
    console.log(oneArray[i]);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

let twoArray = [15, 'november', 27, 'holiday', 'sun', 37, 42, true, 'work', false];
for ( i = 0; i < twoArray.length; i++) {
    if ( typeof twoArray[i] === 'boolean') {
        console.log(twoArray[i]);
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи

for ( i = 0; i < twoArray.length; i++) {
    if ( typeof twoArray[i] === 'number') {
        console.log(twoArray[i]);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи

for ( i = 0; i < twoArray.length; i++) {
    if ( typeof twoArray[i] === 'string') {
        console.log(twoArray[i]);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
let emptyArr2 = [];
emptyArr2[0] = 'Viktor';
emptyArr2[1] = 'Usenko';
emptyArr2[2] = 1984;
emptyArr2[3] = 37;
emptyArr2[4] = 'Odessa';
emptyArr2[5] = true;
emptyArr2[6] = 'sea';
emptyArr2[7] = 'work';
emptyArr2[8] = false;
emptyArr2[9] = 'bingo';

// Вивести в консоль всі його елементи в циклі.

for (let i = 0; i < emptyArr2.length; i++) {
    console.log(emptyArr2[i]);
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let  i=0; i <= 10; i++) {
    console.log(`step:`, i );
    document.write(`<br>step: ${i}` );
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let  i=0; i <= 100; i++) {
    console.log(`step:`, i );
    document.write(`<br>step: ${i}` );
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let  i=0; i <= 100; i+=2) {
    console.log(`step:`, i );
    document.write(`<br>step: ${i}` );
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i=0; i<=100; i++) {
    if (i%2 === 0) {
        console.log(`step:`, i )
        document.write(`<br>step: ${i}`)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i=0; i<=100; i++) {
    if (i%2 === 1) {
        console.log(`step:`, i )
        document.write(`<br>step: ${i}`)
    }
}