// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (e) {
//     console.log(`tagName =`+ e.target.tagName);
//     console.log(`classList =`+ e.target.classList);
//     console.log(`className =`+ e.target.className);
//     console.log(`ID =` + e.target.id);
//     console.log(`size :`+ `висота=`+ e.target.clientHeight+'px'+' '+`ширина=`+ e.target.clientWidth+'px');
// }
//===================================================================================================================
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let popup = document.createElement('div');
// popup.style.width = '450px';
// popup.style.height = '205px';
// popup.style.background = `rgba(84, 10, 157, 0.5)`;
// popup.style.color = 'white';
// popup.style.fontSize = '30px';
// popup.style.position = 'absolute';
// popup.style.top = '-500px';
// popup.style.transition = '1s';
// document.body.appendChild(popup);
//
// document.onclick = function (e) {
//     popup.style.top = '300px';
//     popup.style.marginLeft = '500px';
//     popup.style.position = 'fixed';
//     popup.innerHTML = `tagName: ${e.target.tagName}  <br>
//                         classList: ${e.target.classList} <br>
//                         className:  ${e.target.className} <br>
//                         ID : ${e.target.id} <br>
//                         size : <br>
//                          висота= ${e.target.clientHeight}px   ширина= ${e.target.clientWidth}px `;
//                        }

//===================================================================================================================
// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива.
// Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

let wrapDiv = document.createElement('div');
wrapDiv.style.border = '3px solid black';
wrapDiv.style.width = '1000px';
wrapDiv.style.height = '500px';
wrapDiv.style.background = 'silver';
wrapDiv.style.paddingTop = '5px';
wrapDiv.style.paddingLeft = '5px';
let form = document.createElement('form');
let statusDiv = document.createElement('div');
form.appendChild(statusDiv);
statusDiv.style.display = 'flex';
let statusP = document.createElement('p');
statusDiv.appendChild(statusP);
statusP.innerHTML = ' status = false';
let ageP = document.createElement('p');
statusDiv.appendChild(ageP);
ageP.innerHTML = 'age > = 29 ';
ageP.style.marginLeft = '80px';
let cityP = document.createElement('p');
statusDiv.appendChild(cityP);
cityP.innerHTML = 'city =  Kyiv';
cityP.style.marginLeft = '100px';


let inputStatus = document.createElement('input');
inputStatus.type = 'checkbox';
inputStatus.style.marginLeft = '30px';
form.appendChild(inputStatus);
let inputAge = document.createElement('input');
inputAge.type = 'checkbox';
inputAge.style.marginLeft = '150px';
form.appendChild(inputAge);
let inputCity = document.createElement('input');
inputCity.type = 'checkbox';
inputCity.style.marginLeft = '150px';
form.appendChild(inputCity);
let buttonFilter = document.createElement('button');
form.appendChild(buttonFilter);
buttonFilter.style.marginLeft = '100px';
buttonFilter.innerText = 'Кому повезло ?';
let outDiv = document.createElement('div');
outDiv.style.marginTop = '100px';
outDiv.style.fontSize = '30px';
form.appendChild(outDiv);



buttonFilter.onclick = (e) => {
    e.preventDefault();
    if (inputAge.checked === true ) {
    console.log(usersWithAddress.filter(item => item.age >= 29))
   }
}

// let Age = () => {
//     if (inputAge.checked)
//     return 29}
// let Status = () => {
//     if (inputStatus.checked)
//     return false}
// let City = () => {
//     if ( inputCity.checked)
//         return 'Kyiv'

// for (const user of usersWithAddress) {
//    if (user.status === Age ) {
//        console.log(usersWithAddress.filter(user => user >= Age)) ;
//    }
//
//   }
//     console.log('parametra net')
//  }

// console.log(`name : ${user.name} - ${user.age} - ${user.address.city} - ${user.status}`);
// if (checkbox.checked == true){          // если он отмечен
//     console.log(array.filter(val => val >= 29)) ;  // вывести массив возраста старше 29 лет
// }
// }


wrapDiv.appendChild(form);
document.body.appendChild(wrapDiv);


//===================================================================================================================
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры.
// Функция создает в боди 2 кнопки (назад/вперед) // при нажатии вперед, вы переходите к дочернему элементу,
// при еще одном нажатии на "вперед", вы переходите к // следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента
// и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему
//     с ним на одном уровне



//===================================================================================================================
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.



//===================================================================================================================
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан