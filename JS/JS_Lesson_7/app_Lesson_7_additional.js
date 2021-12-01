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
class Person {
    constructor (id, name, username, email, phone, website, street, suite, city, zipcode, lat, ing, cName, catchPhrase, bs){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {};
        this.address.street = street;
        this.address.suite = suite;
        this.address.city = city;
        this.address.zipcode = zipcode;
        this.address.suite = suite;
        this.address.geo = {};
        this.address.geo.lat = lat;
        this.address.geo.ing = ing;
        this.phone = phone;
        this.website = website;
        this.company = {};
        this.company.name = cName;
        this.company.catchPhrase = catchPhrase;
        this.company.bs =  bs;
    }
}
let user = new Person (1,'Leanne Graham','Bret','Sincere@april.biz','1-770-736-8031 x56442','hildegard.org','Kulas Light','Apt. 556','Gwenborough','92998-3874', '-37.3159','81.1496','Romaguera-Crona','Multi-layered client-server neural-net', 'harness real-time e-markets');

console.log('user: ', user);
let Test = [
    new Person(7, 'Viktor', 'VVViktoRRR', 'qazxsw@ukr.net',
        '+380934226455', 'fWGG@EGWn.zzh', 'vodoprovodnaya', '50', 'Odessa',
        '65007', '65.004', '78.845', 'logotip', 'ahUigi', 'KHIVHkhfihvciH')
]
console.log(Test);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//  -назва тегу ()
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
