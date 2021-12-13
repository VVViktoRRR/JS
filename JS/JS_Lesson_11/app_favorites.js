console.log(JSON.parse(localStorage.getItem('favoritesArr')));

let out = JSON.parse(localStorage.getItem('favoritesArr'));
console.log(typeof  out);
for (const outElement of out) {
     let div = document.createElement('div');
    div.innerText = `${outElement}`;
     document.body.appendChild(div);
}


