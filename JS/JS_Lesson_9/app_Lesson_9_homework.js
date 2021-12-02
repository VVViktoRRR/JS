// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');

//---------------------------------------------------------------------------------------------------------------------
//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

//---------------------------------------------------------------------------------------------------------------------
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.background = 'silver';
div.style.fontSize = '40px';
div.style.color = 'red';

//---------------------------------------------------------------------------------------------------------------------
// - додати цей блок в body.
document.body.appendChild(div);
console.log(div);

//---------------------------------------------------------------------------------------------------------------------
// - клонувати його повністю, та додати клон в body.
document.body.appendChild(div.cloneNode(true))

//---------------------------------------------------------------------------------------------------------------------
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let menu = document.getElementsByClassName('menu')[0];
let arr = ['Main','Products','About us','Contacts'];
for (let item of arr) {
    let li = document.createElement('li');
    li.innerText = `${item}`;
    menu.appendChild(li);
}

//---------------------------------------------------------------------------------------------------------------------
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let educationDiv = document.createElement('div');
document.body.appendChild(educationDiv);
for (const educationElement of coursesAndDurationArray) {
    let elementDiv = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.style.background = 'red';
    h3.style.width = '500px';
    h3.innerText = ` title: ${educationElement.title} -  monthDuration: ${educationElement.monthDuration}` ;

    elementDiv.appendChild(h3);
    educationDiv.appendChild(elementDiv)
}
//---------------------------------------------------------------------------------------------------------------------
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let finishDiv = document.createElement('div');
document.body.appendChild(finishDiv);
for (const item of coursesAndDurationArray2) {
   let itemDiv = document.createElement('div');
   itemDiv.classList.add('item');
   let h1 = document.createElement('h1');
   h1.innerText = `title: ${item.title}`;
   h1.classList = 'heading';
   let p = document.createElement('p');
   p.innerText = `monthDuration: ${item.monthDuration}`;
   p.classList = 'description';


    itemDiv.appendChild(h1);
    itemDiv.appendChild(p);
   finishDiv.appendChild(itemDiv);
}