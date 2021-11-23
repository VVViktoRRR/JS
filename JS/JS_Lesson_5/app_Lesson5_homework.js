document.write(`<div><h4>
    Всі функції повинні бути описані стрілочним типом!!!!<br>
    - створити функцію яка обчислює та повертає площу прямокутника висотою
    </h4></div>`);


let S = (h) => h*10;
S();
console.log(S(5));
document.write(`<div><h4> S = ${S(5)} </h4></div>`);

//=====================================================================================================================
document.write(`<hr><div><h4> - створити функцію яка обчислює та повертає площу кола</h4></div>`);

let Circle =(r)=> Math.PI*Math.pow(r, 2);
Circle();
console.log(Circle(10));
document.write(`<div><h4> площa кола = ${Circle(10)}</h4></div><hr>`);

//=====================================================================================================================
document.write(`<div><h4>- створити функцію яка обчислює та повертає площу циліндру </h4></div>`);

let cylinder =(r,h)=>2*Math.PI*r*(r+h);
cylinder();
console.log(cylinder(5, 7));
document.write(`<div><h4> площa циліндру = ${cylinder(5,7)}</h4></div><hr>`);

//=====================================================================================================================
document.write(`<div><h4>- створити функцію яка приймає масив та виводить кожен його елемент </h4></div>`);

let Test1 = (data)=> {
    for (const dataElement of data) {
        console.log(dataElement);
        document.write(`<li>${dataElement}</li>`)
    }
}
Test1([1, 4, 6, 8, 'okten']);

//=====================================================================================================================
document.write(`<hr><div><h4>- створити функцію яка  створює параграф з текстом. Текст задати через аргумент</h4></div>`);

let Text1 = (word1)=> {
    document.write(`<div><p>${word1}</p></div>`)
}
Text1('Hello Mentors');

//=====================================================================================================================
document.write(`<hr><div><h4>- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий</h4></div>`);

let Text2 = (word2)=> {
    document.write(`<ul>`);
    document.write(`
                    <li>${word2}</li>
                    <li>${word2}</li>
                    <li>${word2}</li>
                   `);
    document.write(`</ul>`);
}
Text2('Have a good Day');

//=====================================================================================================================
document.write(`<hr><div><h4>- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.<br>
                            Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) </h4></div>`);

let Text3 = (word3, n)=> {
    for ( let i = 0; i <= n; i++ ) {
        document.write(`<ul>`);
        document.write(`<li>${word3}</li>`);
        document.write(`</ul>`);
    }
}
Text3('Okten is cool', 3);
//=====================================================================================================================
document.write(`<hr><div><h4>- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список</h4></div>`);
let List = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        document.write(`<ul>`);
        document.write(`<li>${arrElement}</li>`);
        document.write(`</ul>`);

    }
}
List([1, 5, 56, 'Okten', true, 'Odessa', 23, 'november'])
//=====================================================================================================================
document.write(`<hr><div><h4>- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , 
                                та виводить їх в документ.<br>
                                Для кожного об'єкту окремий блок.</h4></div>`);

let objOutput = (obj)=>{
            document.write(`<div><ul><h4>
                             <li><div>${obj.id}</div></li>  
                             <li><div>${obj.name}</div></li>  
                             <li><div>${obj.age}</div></li>  
                       </h4></ul></div>`);
}
objOutput({id:1604, name:'Viktor', age:37});
