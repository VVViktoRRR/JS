document.write(`<div><h2> 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
 - Скласти результат цих чисел в змінній result.</h2></div>`);

let array = [];
function createArray( min, max, l) {
    for ( let i = 0; i < l; i++) {
        array.push(Math.floor(Math.random()*(max - min)+min));
    }
}
createArray(0, 100, 20);
console.log(array);
document.write(`<div><h3>[${array}]</h3></div>`);
function sum() {
    let result = 0;
    for ( let i = 0; i < array.length; i++) {
        result +=array[i];

    }
    console.log(result);
    document.write(`<div><h3> result = ${result}</h3></div>`);
}
sum();

document.write(`<hr><div><h2>
 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр</h2></div>`);

let book = {назва: 'Education',кількість_сторінок: 10500, жанр: 'drama' };
console.log(book);
document.write(`<div><h3>назва: ${book.назва}<br>
                          жанр: ${book.жанр}<br> 
                          кількість_сторінок: ${book.кількість_сторінок}</h3></div>`);

document.write(`<hr><div><h2>3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори </h2></div>`);

book2 = { назва : 'Education', кількість_сторінок: 10500, жанр: 'drama', автори: 'Бог'};
console.log(book2);
document.write(`<div><h3>назва: ${book2.назва}<br>
                          жанр: ${book2.жанр}<br> 
                          кількість_сторінок: ${book2.кількість_сторінок}<br>
                          автори: ${book2.автори}
                          </h3></div>`);

document.write(`<hr><div><h2>4. Створити маис об'єктів book з наступними полями 
 - назва, кількість сторінок, жанр, автори. <br>
 Вивести кожну книгу як окремий об'єкт</h2></div>`);

let book3 = [
    {назва: 'Букварь',кількість_сторінок: 24, жанр: 'фантастика', автори: 'Биба и Боба'},
    {назва: 'Труды',кількість_сторінок: 23, жанр: 'боевик', автори: 'Молоток'},
    {назва: 'Физра',кількість_сторінок: 50, жанр: 'эротика', автори: 'мяч'},
    {назва: 'Химия',кількість_сторінок: 78, жанр: 'фантастика', автори: 'Менделей'},
    {назва: 'История',кількість_сторінок: 100500, жанр: 'реалити', автори: 'народ'},
]
document.write(`<div><h4>назва: ${book3[0].назва}<br>
                          жанр: ${book3[0].жанр}<br> 
                          кількість_сторінок: ${book3[0].кількість_сторінок}<br>
                          автори: ${book3[0].автори}<br>
                          <br>
                          назва: ${book3[1].назва}<br>
                          жанр: ${book3[1].жанр}<br> 
                          кількість_сторінок: ${book3[1].кількість_сторінок}<br>
                          автори: ${book3[1].автори}<br>
                           <br>
                          назва: ${book3[2].назва}<br>
                          жанр: ${book3[2].жанр}<br> 
                          кількість_сторінок: ${book3[2].кількість_сторінок}<br>
                          автори: ${book3[2].автори}<br>
                                                     <br>
                          назва: ${book3[3].назва}<br>
                          жанр: ${book3[3].жанр}<br> 
                          кількість_сторінок: ${book3[3].кількість_сторінок}<br>
                          автори: ${book3[3].автори}<br>
                          </h4></div>`);


document.write(`<hr><div><h2>
5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height)
та шириною 10см (змінна width).<br>
Значення площі зберігати в змінній s.<br>
</h2></div>`);

let height = 23;
let width = 10;
let s = (height*width);
console.log(s);
function are() {
    return s = height*width;
   }
   console.log(s);
document.write(`<div><h2>s = ${s}</h2></div>`);

document.write(`<hr><div><h2> 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC)
та діаметром основи 4м (dC),
результат помістіть у змінну v.</h2></div>`);
 let heightC = 10;
 let diametr = 4;
 let V = 3.14*(diametr/2)*(diametr/2)*heightC;
 console.log(V);
function Vollume() {
    return V2 = 3.14*Math.pow(4/2, 2)*heightC;
}
Vollume();
console.log(V2);
document.write(`<div><h2> V = ${V2}</h2></div>`)


document.write(`<hr><div><h2> 7. У прямокутного трикутника дві сторони
 n (зі значенням 3) та m (зі значенням 4).<br>
Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) 
або оператор зведення в ступінь **).</h2></div>`);
let n = 3;
let m = 4;
let k = Math.sqrt(n*n+m*m)
console.log(k);
let k1 = Math.sqrt(Math.pow(n, 2) + Math.pow(m,2));
console.log(k1);

document.write(`<div><h2> k = ${k1}</h2></div>`)

