// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car( model, manufacturer, year, speedMax, volume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.speedMax = speedMax;
    this.volume = volume;
    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.speedMax} на годину`);
}
    this.info = function() {
        console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}
        speedMax - ${this.speedMax}, volume - ${this.volume}`);
    }
    this.increaseMaxSpeed = function(newSpeed) {
        this.speedMax = this.speedMax + newSpeed;
        console.log(`newspeedMax = ${this.speedMax}`)
        }
    this.changeYear = function(newValue) {
        this.year = newValue;
        console.log(`${this.year}`);
    }
    this.addDriver = function(driver) {
    this.driver = driver;
    console.log(`driver = ${this.driver}`);
    }
}
let myCar = new Car('RAV-4', 'Japan', 2005, 200, 2000);
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(20);
myCar.changeYear(2006);
myCar.addDriver('Viktor');

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class cars {
      constructor(model, manufacturer, year, speedMax, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.speedMax = speedMax;
        this.volume = volume;
        }
        drive() {
            console.log(`їдемо зі швидкістю ${this.speedMax} на годину`)
        }
        info() {
        console.log(`model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}
        speedMax - ${this.speedMax}, volume - ${this.volume}`);
    }
        increaseMaxSpeed (newSpeed) {
        this.speedMax = this.speedMax + newSpeed;
        console.log(`newspeedMax = ${this.speedMax}`)
    }
        changeYear(newValue) {
        this.year = newValue;
        console.log(`${this.year}`);
    }
        addDriver (driver) {
        this.driver = driver;
        console.log(`driver = ${this.driver}`);
    }
    }
let myCar2 = new cars('VAZ2107', 'SSSR', 1990, 180, 150);
myCar2.drive();
myCar2.info();
myCar2.increaseMaxSpeed(50);
myCar2.changeYear(200);
myCar2.addDriver('Viktor');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class girl {
    constructor(name, age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
let girls = [
    new girl('Oksana', 25, 38),
    new girl('Olya', 27, 37),
    new girl('Vika', 30, 36),
    new girl('Angela', 28, 39),
    new girl('Lyda', 31, 37),
    new girl('Nastya', 30, 37),
    new girl('Julia', 30, 36),
    new girl('Katya', 25, 39),
    new girl('Britni', 35, 37),
    new girl('Jesika', 32, 40),
]
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class prince {
     constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let Prince = new prince('Vasya', 35, 38);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let newGirl = function (girls, Prince) {
    for (let Girl of girls) {
        if (Girl.footsize === Prince.size)
         return    console.log(Girl.name);
    }
}
newGirl(girls,Prince);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let wife = girls.find(value => value.footsize === Prince.size);
console.log(wife);


