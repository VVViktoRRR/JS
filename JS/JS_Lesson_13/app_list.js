let allDelButton = document.createElement('button');
document.body.appendChild(allDelButton);
allDelButton.style.width = '98%';
allDelButton.style.background = 'blue';
allDelButton.innerHTML = 'Очистить склад';
allDelButton.onclick = (e) => {
    e.preventDefault();
    localStorage.removeItem('arrAdd');
    window.location.reload();
}


let listJson = localStorage.getItem('arrAdd');
let arrAdd = JSON.parse(listJson);
console.log(arrAdd);
let wrapDiv = document.createElement('div');
wrapDiv.style.display = 'flex';
wrapDiv.style.flexWrap = 'wrap';
wrapDiv.style.alignItems = 'center';

for (const item of arrAdd) {
    console.log(item);
    let productDiv = document.createElement('div');
    wrapDiv.appendChild(productDiv);
    productDiv.style.background = 'silver';
    productDiv.style.border = '2px solid black';
    productDiv.style.width = '24%';
    productDiv.innerHTML = `<img src="${item.image}", width="300px">
   <b> ${item.model} </b><br>
         количество: ${item.quantity} шт,<br>    цена: ${item.price} руб<br>`;

    let delButton = document.createElement('button');
    productDiv.appendChild(delButton);
    delButton.style.marginLeft = '10px';
    delButton.style.background = 'red';
    delButton.style.width = '90%';
    delButton.innerHTML = 'Delete product';


    delButton.onclick = (e) => {
        e.preventDefault();
                const index = arrAdd.indexOf(item);
                arrAdd.splice(index,1);
                localStorage.setItem('arrAdd', JSON.stringify(arrAdd));
                location.reload();
        }
        }

document.body.appendChild(wrapDiv);

//    Winston , https://img.fozzyshop.com.ua/181485-large_default/sigarety-winston-silver.jpg
//   LM, http://i.otzovik.com/objects/b/950000/945667.png
//   Marlboro, https://upload.wikimedia.org/wikipedia/commons/0/0c/Marlboro.jpg