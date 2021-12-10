// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let wrap = document.createElement('div');
document.body.appendChild(wrap);


let favoritesArr = [];
for (const user of users) {
    let infoDiv = document.createElement('div');
    wrap.appendChild(infoDiv);
    let buttonFavorites = document.createElement('button');
    wrap.appendChild(buttonFavorites);
    buttonFavorites.innerText = ` add favorites`;
    infoDiv.innerText = ` name: ${user.name}  age: ${user.age}  status: ${user.status}`;
    buttonFavorites.onclick = (e) => {
        e.preventDefault();
favoritesArr.push(` name: ${user.name},  age: ${user.age},  status: ${user.status}`);
        console.log(favoritesArr);
        console.log(typeof  favoritesArr);
localStorage.setItem('favoritesArr', JSON.stringify(favoritesArr));
    }
}

let a = document.createElement('a');
a.style.fontSize = '30px';
a.style.color = 'black';
a.innerHTML = `<a href = "favorites.html"> Favorites </a>`


document.body.appendChild(a);
