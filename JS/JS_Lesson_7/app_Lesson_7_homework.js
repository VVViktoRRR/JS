// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id, name, surname , email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}


//=============================================================================================================================
// створити пустий масив, наповнити його 10 об'єктами new User(....)

let array = [
    new User(2, 'Ivan', 'Ivanov', 'qaz@ukr.net', '+30934852456'),
    new User(9, 'Petr', 'Petrov', 'wsx@ukr.net', '+30937532456'),
    new User(1, 'Kolya', 'Kolyznov', 'zaq@ukr.net', '+30934823756'),
    new User(3, 'Vasya', 'Vasyanov', 'xsw@ukr.net', '+30934643756'),
    new User(10, 'Grisha', 'Grishanov', 'qsc@ukr.net', '+30933454756'),
    new User(4, 'Viktor', 'Viktorov', 'zse@ukr.net', '+30934352456'),
    new User(8, 'Dima', 'Dimanov', 'rdx@ukr.net', '+30937567456'),
    new User(6, 'Igor', 'Igorov', 'efv@ukr.net', '+30989823756'),
    new User(7, 'Gadya', 'Petrovich', 'vgy@ukr.net', '+3093421756'),
    new User(5, 'Salo', 'Kaban', 'ikm@ukr.net', '+30934914756'),

];


//=============================================================================================================================
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filter = array.filter((value ) => value.id %2 === 0 );
console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sort = array.sort((a, b) => a.id - b.id);
console.log(sort);


//=============================================================================================================================
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
  }


//=============================================================================================================================
// створити пустий масив, наповнити його 10 об'єктами Client

let clients = [
    new Client('007', 'Ko3ya', 'Bond1', 'qwszfba@rambler.ru', '+798542588753', ['Bond', 'LM', 'Camel', 'Monte-Carlo']),
    new Client('001', 'Ko4ya', 'Bond2', 'qwzxsa@rambler.ru', '+7985425548753', ['Doina', 'LM']),
    new Client('0010', 'Korya', 'Bond4', 'qwzxfsa@rambler.ru', '+7985425838753', ['Astra', 'Monte-Carlo']),
    new Client('009', 'Kosya', 'Bondeed', 'qwsdvba@rambler.ru', '+79854275758753', ['Salve', 'LM', 'Camel', 'Next']),
    new Client('002', 'Kobya', 'Bonddd', 'qwdhrsa@rambler.ru', '+7985425238753', ['Belomor']),
    new Client('006', 'Koxya', 'Bondxxx', 'qwsSDHRa@rambler.ru', '+7985456258753', ['Rodopi', 'Prezident']),
    new Client('003', 'Korya', 'BonZVd', 'qwZSRHsa@rambler.ru', '+7985445258753',['Salve', 'LM', 'Monte', 'Bond']),
    new Client('008', 'Ksoya', 'Bondvd', 'qwsbzxfba@rambler.ru', '+7985427858753', ['Monte', 'LM', 'Camel', 'Next']),
    new Client('005', 'Koyfa', 'Bosebd', 'qwbza@rambler.ru', '+798542558753', ['Salve', 'Monte', 'Camel', 'Bond']),
    new Client('004', 'Kxoya', 'Bobrebnd', 'qwbrsa@rambler.ru', '+7985425688753', ['Monte', 'Salve', 'Camel', 'Next'])
]


//=============================================================================================================================
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortOrder = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortOrder);