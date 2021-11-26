// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1 = 'hello world';
let str2 = 'lorem ipsum';
let str3 = 'javascript is cool';

let str11 = str1.length;
console.log(str11);

let str22 = str2.length;
console.log(str22);

let str33 = str3.length;
console.log(str33);

//===============================================================================================================
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

str11 = str1.toUpperCase();
console.log(str11);

str22 = str2.toUpperCase();
console.log(str22);

str33 = str3.toUpperCase();
console.log(str33);

//===============================================================================================================
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

str1 = 'HELLO WORLD';
str11 = str1.toLowerCase();
console.log(str11);

str2 = 'LOREM IPSUM';
str22 = str2.toLowerCase();
console.log(str22);

str3 = 'JAVASCRIPT IS COOL';
str33 = str3.toLowerCase();
console.log(str33);

//===============================================================================================================
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str4 = ' dirty string   ';
let cleanStr = str4.trim();
console.log(cleanStr);

//===============================================================================================================
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let sTr = 'Каждый охотник желает знать';
let arr = [];
let stringToarray = (str) => {
     arr = sTr.split(' ');
    return arr;
}

stringToarray(sTr);
console.log(arr);
document.write(`<div>${arr}</div>`);

//===============================================================================================================
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної
// кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

 function delete_characters(str, length) {
        // return sTr.slice( 0, length );
        //or
     return str.substring(0, length);

 }
console.log(delete_characters(sTr,  7));


//===============================================================================================================
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str5 = "HTML JavaScript PHP";
function insert_dash(str) {
    return str5.toUpperCase().replaceAll(' ', '-');
}
document.writeln(insert_dash(str5));

//===============================================================================================================
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього
// регістру у верхній.

let word =  'домашкочпок';
function worldsUpper(str) {
return str[0].toLocaleUpperCase()+str.slice(1)
};
document.writeln(`<div>${worldsUpper(word)}</div>`);


//===============================================================================================================
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let Speech = 'сегодня четверг и делаю домашку, которую нужно быстро сделать, при этом вникнуть в каждый метод, но закончил только в пятницу';

let upSpeech = function (speech) {
    return speech.split(' ').map(text=>text.charAt(0).toUpperCase()+text.slice(1)).join(' ');
};
document.writeln(`<div>${upSpeech(Speech)}</div>`);
console.log(upSpeech(Speech));
