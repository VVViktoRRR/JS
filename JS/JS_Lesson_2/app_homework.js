document.write(`<div><h2>
- Дано змінну time яка рівна числу від 0 до 59. <br>
Потрібно написати код, який перевірить, до якої четверті години попадає число<br>
(в першу, другу, третю или четверту частину години).</h2></div>`);

let time = prompt(' сколько сейчас минут?', '0 - 59');
if ( time <= 59 && time >= 45) {
    document.write(`<div><h4> вы в 4й четверті години </h4></div>`);
    console.log(' вы в 4й четверті години ');
    alert('Ви в 4й четверті години ');
}
else if
 ( time < 45 && time >= 30 ) {
        document.write(`<div><h4> вы в 3й четверті години </h4></div>`);
        console.log(' вы в 3й четверті години ')
        alert('Ви  в 3й четверті години ');
    }
else if
( time < 30 && time >= 15 ) {
        document.write(`<div><h4> вы вo 2й четверті години </h4></div>`);
        console.log(' вы вo 2й четверті години ');
        alert('Ви  в 2й четверті години ');
    }
else if
        ( time >= 0 && time < 15) {
        document.write(`<div><h4> вы в 1й четверті години </h4></div>`);
        console.log(' вы в 1й четверті години ');
        alert('Ви  в 1й четверті години' );
    }
else {
    document.write(`<div><h4> нет такой минуты </h4></div>`);
    console.log('нет такой минуты ')
    alert('нет такой минуты ' );
}

document.write(`<hr><div><h2> - У змінній day дано якесь число від 1 до 31. <br>
Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).</h2></div>`);

 let day = prompt(' Какое сегодня число ?', '1- 30');
 if ( day >= 1 && day < 10 ) {
     document.write(`<div><h4> Вы в первой декаде </h4></div>`);
     console.log('Вы в первой декаде ')
     alert('Вы в первой декаде ' );
 }
 else if ( day >= 10 && day < 21) {
     document.write(`<div><h4> Вы во второй декаде </h4></div>`);
     console.log('Вы во второй декаде ')
     alert('Вы во второй декаде ' );
 }
 else if (day >= 21 && day <= 31) {
     document.write(`<div><h4> Вы в третей декаде </h4></div>`);
     console.log(' Вы в третей декаде  ')
     alert(' Вы в третей декаде ' );
 }
 else
 {
     document.write(`<div><h4> какое интересное число месяца )))) </h4></div>`);
     console.log(' какое интересное число месяца ))))  ')
     alert(' какое интересное число месяца ))))' );
 }

document.write(`<hr><div><h2> - У нас є змінна test не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.<br>
 Перевірте роботу скрипта при test, що дорівнює true, false.<br>
 Напишіть два варіанти скрипта - з коротким записом(тернаркою)</h2></div>`);

let test= prompt(' Ведите значение ', 'true or false');

if ( test === 'true') {
    console.log('Верно');
    document.write(`<div><h3> Верно </h3></div>`)
} else {
    console.log('Неправильно');
    document.write(`<div><h3> Неправильно </h3></div>`)
}

let result = (test === 'true') ? console.log('OK') : console.log('Bad');


document.write(`<hr><div><h2> - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.<br>
 Перевірте  скрипт при a, що дорівнює 1, 0, -3</h2></div>`);

let Num = +prompt('Укажите число', '-3, 0, 3');
if ( Num > 0 && Num < 0  ) {
    console.log('Вірно');
    document.write(`<div><h3> Вірно - число не дорівнює *0* </h3></div>`)
} else {
    console.log('Невірно')
    document.write(`<div><h3> Невірно - число  дорівнює *0* </h3></div>`)
}

document.write(`<hr><div><h2> - Скласти розклад на тиждень за домопоги switch.<br>
Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.</h2></div>`);

let weekDay = +prompt('Ведите день недели', 'числом');
switch (weekDay) {
    case 1 :
        document.write(`<div><h3>Понедельник : <br>
                                  День тяжелый
</h3></div>`);
        break;
    case 2 :
        document.write(`<div><h3>Вторник : <br>
                                 Немного проще
</h3></div>`);
        break;
    case 3 :
        document.write(`<div><h3>Среда : <br>
                                Это маленькая пятница
</h3></div>`);
        break;
    case 4 :
        document.write(`<div><h3>Четверг : <br>
                                При СССР - это рыбный день
</h3></div>`);
        break;
    case 5 :
        document.write(`<div><h3>Пятница : <br>
                                 самый долгий рабочий день  

</h3></div>`);
        break;
    case 6 :
        document.write(`<div><h3>Суббота : <br>
                                До обеда болит голова )))
</h3></div>`);
        break;
    case 7 :
        document.write(`<div><h3>Воскресение : <br>
                                 Можно поспать подольше
</h3></div>`);
        break;
    default:
        document.write(`<div><h3>Ну ты и рукожоп ;-) </h3></div>`);
}


document.write(`<hr><div><h2>- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.</h2></div>`);

let Year = +prompt('Ведите год ', '****');
if (Year%4 === 0) {
    console.log('Это высокосный год');
    document.write(`<div><h3> Это высокосный год </h3></div>`);
} else {
    console.log('Можешь строить дом - год не высокостный');
    document.write(`<div><h3> Можешь строить дом - год не высокостный </h3></div>`);
}
document.write(`<hr><div><h2>- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: <br>
„Яка «офіційна» назва JavaScript?“<br>
Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
</h2></div>`);

let data = prompt('Яка «офіційна» назва JavaScript?');
if ( data === 'ECMAScript') {
    console.log('Правильно!');
    document.write(`<div><h3> Правильно </h3></div>`);
} else {
    console.log('Не знаєте? ECMAScript!');
    document.write(`<div><h3> Не знаєте? ECMAScript! </h3></div>`);
}
