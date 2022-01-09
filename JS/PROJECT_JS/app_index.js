document.body.style.display = 'flex';
document.body.style.flexWrap = 'wrap';
document.body.style.background = '#bfc9bf';
document.body.style.width = '100%';

fetch('https://jsonplaceholder.typicode.com/users')
.then(value => value.json())
.then(value => {
    for (const user of value) {
        let userDiv = document.createElement('div');
        userDiv.style.width = '45%';
        userDiv.style.border = '2px solid darkblue';
        userDiv.style.padding = '3px';
        userDiv.style.margin = '2px';

        userDiv.innerHTML = `<h4>${user.id}  - ${user.name}</h4><hr>`;
        let userButton = document.createElement('button');
        userButton.style.background = '#8d8bd9';
        userButton.style.width = '90%';
        userButton.style.marginLeft = '25px';
        userButton.innerText = 'user details';
        userButton.onclick = function () {
            window.open('user_details.html?data=' +JSON.stringify(user));
        }


        userDiv.appendChild(userButton);
        document.body.appendChild(userDiv);
    }
})