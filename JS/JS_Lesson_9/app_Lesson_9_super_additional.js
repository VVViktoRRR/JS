// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати)
// їх в інший порожній масив.

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

userAddressArr = [];
for (const user of users) {
    userAddressArr.push(user.address);
     }
console.log(userAddressArr);

//------------------------------------------------------------------------------------------------------------------
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement. Всі данні в одному блоці.

let wrapDiv2 = document.createElement('div');
for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `<hr><b>name: ${user.name}  - age: ${user.age} - status: ${user.status}<br>
                          address:<br>
                          sity: ${user.address.city} <br> 
                          country: ${user.address.country} <br>
                          street: ${user.address.street} <br>
                          houseNumber: ${user.address.houseNumber}</b><hr>`;
    wrapDiv2.appendChild(userDiv);
}
document.body.appendChild(wrapDiv2);

//------------------------------------------------------------------------------------------------------------------
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
// допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

let wrapDiv = document.createElement('div');
for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.style.background = 'olive';
    userDiv.style.marginTop = '5px';
    let nameDiv = document.createElement('div');
    nameDiv.innerText = `name: ${user.name}`;
    let ageDiv = document.createElement('div');
    ageDiv.innerText = `age: ${user.age}`;
    let statusDiv = document.createElement('div');
    statusDiv.innerText = `status: ${user.status}`;
    let addressDiv = document.createElement('div');
    addressDiv.innerHTML = `address:<br>
                          sity: ${user.address.city} <br>
                          country: ${user.address.country} <br>
                          street: ${user.address.street} <br>
                          houseNumber: ${user.address.houseNumber}`;
    addressDiv.style.paddingLeft = '50px';

    userDiv.appendChild(nameDiv);
    userDiv.appendChild(ageDiv);
    userDiv.appendChild(statusDiv);
    userDiv.appendChild(addressDiv);
    wrapDiv.appendChild(userDiv);
}
document.body.appendChild(wrapDiv);

//------------------------------------------------------------------------------------------------------------------
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
// допомоги document.createElement, розділивши всі властивості по своїм блокам ,
// блок з адресою зробити окремим блоком, з блоками для кожної властивості

let wrapDiv3 = document.createElement('div');
for (const user of users) {
    let userDiv = document.createElement('div');
    userDiv.style.color = 'yellow';
    userDiv.style.background = '#000033';
    userDiv.style.marginTop = '5px';
    let nameDiv = document.createElement('div');
    nameDiv.innerText = `name: ${user.name}`;
    let ageDiv = document.createElement('div');
    ageDiv.innerText = `age: ${user.age}`;
    let statusDiv = document.createElement('div');
    statusDiv.innerText = `status: ${user.status}`;
    let addressDiv = document.createElement('div');
    addressDiv.innerHTML = `address:<br>`;
    addressDiv.style.paddingLeft = '50px';
    let cityDiv = document.createElement('div');
    cityDiv.innerText = `city:  ${user.address.city} `;
    cityDiv.style.paddingLeft = '50px';
    let countryDiv = document.createElement('div');
    countryDiv.innerText = `country: ${user.address.country}`;
    countryDiv.style.paddingLeft = '50px';
    let streetDiv = document.createElement('div');
    streetDiv.innerText = `street: ${user.address.street}`;
    streetDiv.style.paddingLeft = '50px';
    let houseNumberDiv = document.createElement('div');
    houseNumberDiv.innerText = ` houseNumber: ${user.address.houseNumber}`;
    houseNumberDiv.style.paddingLeft = '50px';


    userDiv.appendChild(nameDiv);
    userDiv.appendChild(ageDiv);
    userDiv.appendChild(statusDiv);
    userDiv.appendChild(addressDiv);
    addressDiv.appendChild(cityDiv);
    addressDiv.appendChild(countryDiv);
    addressDiv.appendChild(streetDiv);
    addressDiv.appendChild(houseNumberDiv);
    wrapDiv3.appendChild(userDiv);
}
document.body.appendChild(wrapDiv3);

//------------------------------------------------------------------------------------------------------------------
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//  створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//  Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

let contentDiv = document.body.querySelectorAll('#content')[0];
let titleDiv = document.body.querySelectorAll('h2');
let ulDiv = document.createElement('ul');
for (const h2Element of titleDiv) {
    let liDiv = document.createElement('li');
            liDiv.innerText = `${h2Element.innerText}`;
    contentDiv.appendChild(ulDiv);
    ulDiv.appendChild(liDiv);
}

//------------------------------------------------------------------------------------------------------------------
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];

let basicDiv = document.createElement('div');
for (const rulesElement of rules) {
    let textDiv = document.createElement('div');
    let titleH3 = document.createElement('h3');
    titleH3.innerHTML = `<h3> ${rulesElement.title}</h3>`;
    let  bodyP = document.createElement('p');
    bodyP.innerHTML = `<p> ${rulesElement.body}</p>`;

    textDiv.appendChild(titleH3);
    textDiv.appendChild(bodyP);
    basicDiv.appendChild(textDiv);
    document.body.appendChild(basicDiv);
}



