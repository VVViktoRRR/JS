// 1. Створити пустий масив та :
let EmptyArray1 = [];
//     a. заповнити його 50 парними числами за допомоги циклу.
for ( let i = 2; i <= 100; i+=2) {
     EmptyArray1.push(i);
   }
console.log(EmptyArray1);

//     b. заповнити його 50 непарними числами за допомоги циклу.
let array2 = [];
for ( let i = 1; i <= 100; i+=2) {
        array2.push(i);
}
console.log(array2);
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let array3 = [];
         for (let i = 0; i < 20; i++) {
array3[i] = Math.round(Math.random(i)*10);
}
console.log(array3);
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let array4 = [];
for (let i = 0; i < 20; i++) {
    array4[i] = Math.floor(Math.random(i)*(732-8)+8);
}
console.log(array4);
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 2 ; i < array4.length; i+=3) {
    console.log(array4[i]);
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2 ; i < array4.length; i+=3) {
    if ( array4[i]%2 === 0 ) {
        console.log(array4[i]);
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let array5 = [];
for (let i = 0; i < 20; i++) {
    array5[i] = Math.round(Math.random()*100);
}
console.log(array5);

let array6 = [];
for ( let i = 2; i <= array5.length; i+=3) {
    if (array5[i]%2 === 0 ) {
        array6.push(array5[i]);
    }
}
console.log(array6);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let EXAMPLE =  [ 1, 2, 3, 5, 7, 9, 56, 8, 67, 30, 16, 18 ];
for ( let i = 0; i < EXAMPLE.length; i++) {
    if (EXAMPLE[++i]%2 === 0 ) {
        console.log(EXAMPLE[--i]);
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let BuyArray = [100,250,50,168,120,345,188];
let sum =0;
for (let i = 0; i < BuyArray.length; i++) {
    sum += BuyArray[i]/ BuyArray.length;
}
console.log(sum);

// 7. Створити масив з рандомними значеннями,
let array7 = [];
for ( let i = 0 ; i < 10; i++) {
    array7[i] = Math.floor(Math.random()*100);
}
console.log(array7)
// помножити всі його елементи на 5 та перемістити їх в інший масив.
let array8 =[];
for ( let i = 0 ; i < 10; i++) {
    array8.push(array7[i]*5);
}
console.log(array8);

// 8. Створити масив з будь якими значеннями
let StingNumAll = [1, 'november', 16, 'holliday', 'sun', 37, 42, true, 'work', false];
console.log(StingNumAll);
// пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let NewArray = [];
for (i = 0; i < StingNumAll.length; i++) {
    if ( typeof StingNumAll[i] === "number") {
        NewArray.push(StingNumAll[i]);
    }
}
console.log(NewArray);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

for (let i = 0; i < usersWithId.length; i++) {
    const user = usersWithId[i];
    for (let j = 0; j < citiesWithId.length; j++) {
        const city = citiesWithId[j];
if ( user.id ===  city.user_id) {
   user.address = city;
}
    }
}
console.log(usersWithId);
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//  - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
 let array10 = [];
 for ( let i = 0; i < 10; i++) {
     array10[i] = Math.round(Math.random()*100)
 }
console.log(array10);
for (let i = 0; i < array10.length; i++) {
    const array10Element = array10[i];
    if ( array10Element%2 === 0 )
        console.log(array10Element)
   }
// - Взяти масив з 10 чисел або створити його.
// Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let array11 = [];
for ( let i = 0; i < array10.length; i++) {
    array11.push(array10[i])
}
console.log(array11);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let letters = [ 'a', 'b', 'c'] ;
let word1 = "";
for ( let i = 0; i < letters.length; i++) {
    word1 =  word1 + letters[i];
     }
console.log(word1);

let k = 0;
let word2 = "";
while ( k < letters.length) {
     word2 =  word2 + letters[k];
     k++;
}
console.log(word2);


let word3= "";
for (const letter of letters) {
    word3 = word3 + letter;
 }
console.log(word3);