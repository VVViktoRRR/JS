// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

document.write(`<div><h2></h2></div>`);
let a = 9;
let b = 9;
if ( a > b ) {
    console.log(a);

} else if (a === b) {
    console.log( a +' ' +'равно'+' '+ b );
} else {
    console.log(b);
}

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let room = +prompt('Ведите номер квартиры');
if ( room > 0 && room <= 20 ) {
        console.log('Квартира в первом подъезде');
        document.write(`<div><h2>Квартира в первом подъезде</h2></div>`);
} else
    if (room >20 && room <= 48 ) {
        console.log('Квартира во втором подъезде');
        document.write(`<div><h2>Квартира в втором подъезде</h2></div>`);
} else
    if (room >48 && room <= 90 ) {
        console.log('Квартира в третьем подъезде');
        document.write(`<div><h2>Квартира в третьем подъезде</h2></div>`);
} else {
        console.log('Квартиры с таким номером нет в доме');
        document.write(`<div><h2>Квартиры с таким номером нет в доме</h2></div>`);
    }

// - Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number = 5;
    if ( number === 10 ) {
        console.log('ВІРНО');
    } else {
        console.log('НЕВІРНО');
    }

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//  якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

let x = ' x. z ';
    if ( typeof x === 'number') {
        console.log('1');
    } else
    if ( typeof x === 'string') {
        console.log('2');
    } else
    if ( typeof x === 'boolean') {
        console.log('3');
    }  else
    if ( typeof x === 'object') {
        console.log('4');
    }    else {
        console.log('Что это ? чудовище :-)')
    }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temperature = +prompt('Ведите температуру');
    if ( temperature >= 10 && temperature <= 22) {
        console.log('ми йдемо ВЧИТИСЯ')
    } else {
        console.log('сидимо вдома і вчимося ОНЛАЙН')
    }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5.
// І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д )
//     і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let game = +prompt('Ведите число от 1 до 5');
    switch (game) {
        case (1):
            console.log('Ваш приз Авто');
            break;
        case (2):
            console.log('Ваш приз Мото');
            break;
        case (3):
            console.log('Ваш приз Телефон');
            break;
        case (4):
            console.log('Ваш приз от жилетки рукава');
            break;
        case (5):
            console.log('Ваш приз бессмертная надежда');
            break;
        default:
            console.log('Спробуйте натупного разу')
             }