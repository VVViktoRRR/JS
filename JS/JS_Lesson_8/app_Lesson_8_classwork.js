// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header');
    main_header.style.color = 'red';
    main_header.innerText = 'september - 2021';
//==============================================================================================================
// b) робить шириниу елементу ul 400px
let ulTag = document.getElementsByTagName('ul');
for (const ulTagElement of ulTag) {
    ulTagElement.style.width = '800px';
    ulTagElement.style.color = 'blue';
    console.log(ulTagElement);
}
//==============================================================================================================
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
    console.log(linkListElement);
}
//==============================================================================================================
// d) отримує текст який зберігається в елементі  з класом listElement2
function addText(text) {
    let elementText = document.body.getElementsByClassName('listElement2');
    elementText.innerText = text;
    console.log(elementText.innerText);
}
addText('Ukraine');
//==============================================================================================================
// e) отримує всі елементи li та змінює ім колір фону на сірий
let liList = document.getElementsByTagName('li');
console.log(linkList);
for (const liListElement of liList) {
    liListElement.style.background = 'silver';
    liListElement.style.marginBottom = '3px';
}
//==============================================================================================================
// f) отримує всі елементи 'a' та додає їм клас anchor
aList = document.getElementsByTagName('a');
for (const aListElement of liList) {
    aListElement.classList.add('anchor');
//==============================================================================================================
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

if (aListElement.innerText === 'link3') {
    aListElement.style.fontSize = '40px'
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

aListElement.classList.add('element_'+ aListElement.innerText);
  }
//==============================================================================================================
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let colorsubListElement = prompt('', 'выбери цвет фона');
let colorsubFonElement = prompt('', 'выбери цвет текста');
let subList = document.getElementsByClassName('sub-header');
for (const subListElement of subList) {
    subListElement.style.background = colorsubListElement;

// j) отримує всі елементи 'sub-header' та змінює колір тексту
// у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

    subListElement.style.color = colorsubFonElement;
}
//==============================================================================================================
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let anyText = prompt('', 'введите любой текст');
let content = document.getElementsByClassName('content_1');
content.innerText = anyText;
//==============================================================================================================
// l) отримати елементи p та змінити їм padding на 20px
let pList = document.getElementsByTagName('p');
for (const pListElement of pList) {
    pListElement.style.padding = '20px';
}
//==============================================================================================================
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2List = document.getElementsByClassName('text2');
for (const text2ListElement of text2List) {
    text2ListElement.innerHTML = '<b> september - 2021 </b>';
}
