// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
let n1 = 'Harry..Potter';
let n2 = 'Ron---Whisley';
let n3 = 'Hermione__Granger';

let replace = (text) => {
    return  text.replaceAll('.', ' ')
                .replaceAll('-', ' ')
                .replaceAll('_', ' ')
}
console.log(replace(n1));
console.log(replace(n2));
console.log(replace(n3));


 // - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let array = [];
let randomNum = () => {
       for (let i = 0; i < 20; i++) {
       array.push(Math.round(Math.random()*100));
       }
    console.log(array);
}
randomNum();

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let sort = (arr) => {
 return    arr.sort((u1, u2) => u1 - u2)
}
sort(array);
console.log(array);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let filter = (arr) => {
    return    arr.filter(index => index%2 === 0)
}
filter(array);
console.log(filter(array));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let emptуArr = [];
let randomStr = (n, length) => {
    for (let i = 0; i < length; i++) {
            emptуArr.push(Math.round(Math.random()*n))
            }
    emptуArr.map(text => text.toString());
   }
console.log(emptуArr);
randomStr(90, 20);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.

// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]


let nums = [11,21,3];
let direction =(action) => {
if (action ==='ascending') {nums.sort((u1, u2)=> u1 - u2)}
else if (action === 'descending') {nums.sort((u1, u2) => u2 - u1)}
else return nums;
    console.log(nums);
}
direction('descending');

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration


let monthDuration = (action) => {
        if (action === 'up') {coursesAndDurationArray.sort((u1, u2) => u1.monthDuration -u2.monthDuration)}
        if (action ==='down') {coursesAndDurationArray.sort((u1, u2) => u2.monthDuration - u1.monthDuration)}
    console.log(coursesAndDurationArray);
}
monthDuration('down');

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let duration = coursesAndDurationArray.filter(value => {
     return value.monthDuration > 5
 });
    console.log(duration);


