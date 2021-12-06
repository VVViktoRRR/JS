// - Создать произвольный елемент с id = text.
// Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let textDiv = document.createElement('div');
textDiv.id = 'text';
textDiv.style.width = '200px';
textDiv.style.height = '200px';
textDiv.style.background = 'black';
textDiv.onclick = () => textDiv.style.display = 'none';

let button = document.createElement('button');
button.innerText = ' remove DIV';
button.style.width = '100px';
button.style.height = '20px';
button.style.background = 'red';
button.onclick = () => textDiv.style.display = 'block';

document.body.appendChild(button);
document.body.appendChild(textDiv);

//==================================================================================================
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let button2 = document.createElement('button');
button2.innerText = ' click  me';
button2.style.width = '100px';
button2.style.height = '20';
button2.style.background = 'silver';
button2.onclick = () => button2.style.display = 'none';


document.body.appendChild(button2);


//==================================================================================================
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

let input =document.createElement('input');
let button3 = document.createElement('button');
button3.innerText = 'ENTER';
button3.onclick = () => {
    if ( input.value >= 18) {
        console.log('good')
}
    else {
    console.log('bad');
}
}
document.body.appendChild(button3);
document.body.appendChild(input);

//==================================================================================================
// - Создайте меню, которое раскрывается/сворачивается при клике

let menuDiv = document.createElement('div');
let headerMenuDiv = document.createElement('div');
let titleMenuDiv = document.createElement('div');
headerMenuDiv.style.background = 'silver';
headerMenuDiv.innerText = 'Menu';
headerMenuDiv.style.width = '500px';
headerMenuDiv.style.height = '50px';
headerMenuDiv.style.fontSize = '20px';
titleMenuDiv.style.background = 'pink';
titleMenuDiv.style.width = '500px';
titleMenuDiv.style.height = '300px';
titleMenuDiv.style.fontSize = '20px';
titleMenuDiv.innerHTML = `<ul>  <li> HTML/CSS </li>
                                <li> JAVASCRIPT </li>
                                <li> REACT </li>
                                <li> TYPESCRIPT </li>
                                <li> ANGULAR </li>
                                <li> MYSQL </li>
                                <li> MONGODB </li>
                                <li> NODE.JS </li>
                                <li> DEVOPS </li>
                                <li> SCRUM </li>
                                <li> GIT </li>
                                <li> СТАЖУВАННЯ </li></ul>`;
headerMenuDiv.addEventListener('click', function f(click) {
    if ((titleMenuDiv.style.display) === 'none') {
        titleMenuDiv.style.display = 'block';
    }
    else {
        titleMenuDiv.style.display = 'none'
    }
})
titleMenuDiv.onclick = () => titleMenuDiv.style.display = 'none';

menuDiv.appendChild(headerMenuDiv);
menuDiv.appendChild(titleMenuDiv);
document.body.appendChild(menuDiv);

//==================================================================================================
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let wrap = document.createElement('div');
let commentDiv1 = document.createElement('div');
commentDiv1.style.background = 'orange'
let title1 = document.createElement('p');
let infoBody1 = document.createElement('button');
infoBody1.innerText = 'info';
infoBody1.onclick = () => {
    if ((body1.style.display) === 'none') {
        body1.style.display = 'block';
    }
}
let body1 = document.createElement('p');
title1.innerText = 'title: Lorem ipsum dolor sit amet.';
body1.innerText = 'body: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ex.';
let noneBody1 = document.createElement('button');
noneBody1.innerText = 'Hide body';
noneBody1.onclick = () => body1.style.display = 'none';

let commentDiv2 = document.createElement('div');
commentDiv2.style.background = 'green';
let title2 = document.createElement('p');
let infoBody2 = document.createElement('button');
infoBody2.innerText = 'info';
infoBody2.onclick = () => {
    if ((body2.style.display) === 'none') {
        body2.style.display = 'block';
    }
}
let body2 = document.createElement('p');
title2.innerText = 'title: Lorem ipsum dolor.';
body2.innerText = 'body: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ducimus eius facilis quasi soluta ut.';
let noneBody2 = document.createElement('button');
noneBody2.innerText = 'Hide body';
noneBody2.onclick = () => body2.style.display = 'none';

let commentDiv3 = document.createElement('div');
commentDiv3.style.background = 'blue';
let title3 = document.createElement('p');
let infoBody3 = document.createElement('button');
infoBody3.innerText = 'info';
infoBody3.onclick = () => {
    if ((body3.style.display) === 'none') {
        body3.style.display = 'block';
    }
}
let body3 = document.createElement('p');
title3.innerText = 'title: Lorem ipsum.';
body3.innerText = 'body: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto excepturi explicaboharum incidunt ipsum iusto repudiandae sapiente unde veniam veritatis. Accusamus amet dicta id modi numquam odio repellendus temporibus.';
let noneBody3 = document.createElement('button');
noneBody3.innerText = 'Hide body';
noneBody3.onclick = () => body3.style.display = 'none';

wrap.appendChild(commentDiv1);
commentDiv1.appendChild(title1);
commentDiv1.appendChild(infoBody1);
commentDiv1.appendChild(body1);
commentDiv1.appendChild(noneBody1);

wrap.appendChild(commentDiv2);
commentDiv2.appendChild(title2);
commentDiv2.appendChild(infoBody2);
commentDiv2.appendChild(body2);
commentDiv2.appendChild(noneBody2);

wrap.appendChild(commentDiv3);
commentDiv3.appendChild(title3);
commentDiv3.appendChild(infoBody3);
commentDiv3.appendChild(body3);
commentDiv3.appendChild(noneBody3);

document.body.appendChild(wrap);