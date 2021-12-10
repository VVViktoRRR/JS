// -створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage

let form1 = document.createElement('form');
form1.style.background = 'orange';
form1.style.width = '400px';
form1.style.height = '40px';
form1.style.padding = '20px';
let inputName = document.createElement('input');
form1.appendChild(inputName);
let inputAge = document.createElement('input');
form1.appendChild(inputAge);
let button1 = document.createElement('button');
button1.innerText = ' add ';
form1.appendChild(button1);

button1.onclick =(e) => {
    e.preventDefault();
    let outInfo = {name:`${inputName.value}`, age:`${inputAge.value}`};
    console.log(typeof  outInfo);
    localStorage.setItem('outInfo', JSON.stringify(outInfo));
    console.log(outInfo);
}
document.body.appendChild(form1);
//======================================================================================================================
// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form2 = document.createElement('form');
form2.style.background = 'blue';
form2.style.width = '620px';
form2.style.height = '40px';
form2.style.padding = '20px';

let inputModel = document.createElement('input');
form2.appendChild(inputModel);
let inputType = document.createElement('input');
form2.appendChild(inputType);
let inputVolume = document.createElement('input');
form2.appendChild(inputVolume);
let button2 = document.createElement('button');
button2.innerText = ' Send info ';
form2.appendChild(button2);


let arr = [];
button2.onclick = (e) => {
 e.preventDefault();
 arr.push ({MODEL: inputModel.value, TYPE: inputType.value, VOLUME: inputVolume.value});
    console.log(arr);
 localStorage.setItem('arr', JSON.stringify(arr));
    console.log(arr);
 }
 document.body.appendChild(form2);