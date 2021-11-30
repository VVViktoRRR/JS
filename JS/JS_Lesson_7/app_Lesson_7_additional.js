// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
class Task1 {
    constructor(id, name, username, email, address) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
        this.address = address
    this.address.street = address.street,
    this.address.suite = address.suite,
    this.address.sity = address.city,
    this.address.zipcode = address.zipcode,
    this.address.geo = address.geo
  //   this.address = address
  //       class address1 {
  //       constructor(street, suite, city, zipcode) {
  //         this.street = street;
  //         this.suite = suite;
  //         this.city = city;
  //         this.zipcode = zipcode;
  //     }
  // }
   }
}
let proba = [
    new Task1(7, 'Viktor', 'VVViktoRRR', 'qazxsw@ukr.net', 'Odessa', '' )
]
console.log(proba);


// this.address = [
//     this.address.street = address.street,
//     this.address.suite = address.suite,
//     this.address.sity = address.city,
//     this.address.zipcode = address.zipcode,
//     this.address.geo = address.geo
// ]
// {
//     this.address.street = street;
//     this.address.city = city;
//     this.address.zipcode = zipcode;
//     this.address.zipcode.geo = geo;
//     {
//         this.address.zipcode.geo.lat = lat;
//         this.address.zipcode.geo.lng = lng;
//     }
// }
// this.phone = phone;
// this.website = website;
// this.company = company;
// {
//     this.company.name = company.name;
//     this.company.catchPhrase = company.catchPhrasee;
//     this.company.bs = company.bs;
// }

// console.log(Task1);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
