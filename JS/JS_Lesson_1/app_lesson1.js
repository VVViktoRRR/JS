 // - Створити змінні.
 // - Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let q = 'hello';
let a = 'owu';
let z = 'ua';
let w = 1;
let s = 10;
let x = -999;
let e = 123;
let d = 3.14;
let c = 2.7;
let r = 16;
let f = true;
let v = false;

// - Вивести кожну змінну за допомогою: console.log , alert, document.write

console.log(q);
document.write(q);

console.log(a);
document.write(a);

console.log(z);
document.write(z);

console.log(w);
document.write(w);

console.log(s);
document.write(s);

console.log(x);
document.write(x);

console.log(e);
document.write(e);

console.log(d);
document.write(d);

console.log(c);
document.write(c);

console.log(r);
document.write(r);

console.log(f);
document.write(f);

console.log(v);
document.write(v);


<!--// - Переприсвоїти кожній змінній з завдання значення на довільне.-->

q = 'q';
a = 'a';
z=1;
w=2;
s=3;
x=4;
e=false;
d= true;
c=true;
r=4;
f=5;
v=8;

<!--Вивести кожну змінну за допомогою: console.log , alert, document.write-->
console.log(q);
document.write(q);

console.log(a);
document.write(a);

console.log(z);
document.write(z);

console.log(w);
document.write(w);

console.log(s);
document.write(s);

console.log(x);
document.write(x);

console.log(e);
document.write(e);

console.log(d);
document.write(d);

console.log(c);
document.write(c);

console.log(r);
document.write(r);

console.log(f);
document.write(f);

console.log(v);
document.write(v);

 // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. Зєднати їх в одну змінну person. (Не об'єкт)

 let firstName = 'Viktor';
 let middleName = 'Vladimirovich';
 let lastName = 'Usenko';
 person = `${firstName} ${middleName} ${lastName}`;
 console.log(person);
 document.write(person);

 // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.

 let name = prompt('Какое у  тебя имя ?',  );
 let surname = prompt('Какая у  тебя фамилия?',  );
 let age = prompt('Сколько тебе лет ?',  );

 //     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

 alert(`Вітаю ${name} ${surname}. Тобі ${age} років`);

 // - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
     let aa = 100; let bb = '100'; let cc = true;
 console.log(typeof aa);
 console.log(typeof bb);
 console.log(typeof cc);

 // - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
 //     В однакових виразах не використовувати однакові оператори!!!
 // 5 > 6 -> true
 // 5 < 6 -> false
 // 5 >= 6 -> false
 // 5 == 6 -> false
 // 10 === 10 -> true
 // 10 == 10 -> true
 // 10 > 10 -> false
 // 10 < 10 -> false
 // 10 != 10 -> false
 // 123 === '123' -> false
 // 123 == '123' -> true
 //
 // - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
 let str = "20";
 let aaa = 5;
 // стринга + число ведет чебя как встрина, в остальных случаях как число
 document.write(str + aaa + "<br/>"); //205


 document.write(str - aaa + "<br/>"); //15


 document.write(str * "2" + "<br/>"); // 40


 document.write(str/2 + "<br/>"); //10



