console.log(JSON.parse(localStorage.getItem('favoritesArr')));

let out = JSON.parse(localStorage.getItem('favoritesArr'));
for (const outElement of out) {
    let div = document.createElement('div');
    div.innerText = outElement;
    console.log(typeof outElement);
    document.body.appendChild(div);
}


