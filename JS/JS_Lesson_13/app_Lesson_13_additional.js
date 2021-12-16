// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let arrAdd = [];
let wrapDiv = document.createElement('div');
wrapDiv.style.display = 'flex';
wrapDiv.style.flexWrap = 'wrap';
wrapDiv.style.background = 'silver';
wrapDiv.style.width = '1000px';
let form = document.createElement('form');
form.style.padding = '20px';
wrapDiv.appendChild(form);
form.style.width = '100%';
let inputName = document.createElement('input');
inputName.placeholder = 'Название товара';
form.appendChild(inputName);
let inputQuantity = document.createElement('input');
inputQuantity.placeholder = 'Количество товара';
form.appendChild(inputQuantity);
let inputPrice = document.createElement('input');
inputPrice.placeholder = 'Цена товара';
form.appendChild(inputPrice);
let inputImg = document.createElement('input');
inputImg.placeholder = 'ссылка на изображение';
form.appendChild(inputImg);

    let addButton = document.createElement('button');
    form.appendChild(addButton);
    addButton.innerHTML = ` add product`;
    addButton.style.width = '15%';
    addButton.style.fontSize = '15px';
    addButton.style.background = 'pink';
    addButton.style.borderRadius = '20px';

    addButton.onclick = (e) => {
        e.preventDefault();

        // let data = new Date;
        // let id = data.getTime();
        arrAdd.push({model: inputName.value, quantity: inputQuantity.value, price: inputPrice.value,  image: inputImg.value});
        inputName.value = '';
        inputQuantity.value = '';
        inputPrice.value = '';
        inputImg.value = '';

        console.log(arrAdd);
        localStorage.setItem('arrAdd', JSON.stringify(arrAdd))  ;
    }

    let a = document.createElement('a');
    a.style.marginLeft = '15px';
    a.style.fontSize = '15px';
    a.style.color = 'black';
    a.innerHTML = `<a href = "list.html"> list products </a>`

form.appendChild(a);
document.body.appendChild(wrapDiv);


