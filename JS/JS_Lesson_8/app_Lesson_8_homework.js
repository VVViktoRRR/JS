// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName
//     або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"

document.getElementById('content');
console.log(content.innerText);

// -- отримує текст з блоку з id "rules"

document.getElementById('rules');
console.log(rules.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший

content.innerText = 'Вторник 31.11, последний день осени.'

// -- замініть текст параграфа з id 'rules' на будь-який інший

rules.innerText = 'Завтра среда и первый день зимы.'

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій

document.body.getElementsByTagName('rules');
rules.style.background = 'red';
content.style.background = 'red';
rules.style.color = 'blue';
content.style.color = 'blue';

let classLists = document.body.getElementsByTagName('li');
for (const classListElement of classLists) {
    classListElement.style.background = 'red';
    classListElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

document.getElementById('rules');
console.log(rules.innerText);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

document.getElementsByClassName('fc_rules');
for (const classList of classLists) {
    console.log(classList.innerText);
    classList.style.color = 'red';
}
