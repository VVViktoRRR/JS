let url = new URL (location.href);
let user = JSON.parse(url.searchParams.get('data')) ;
let detailsDiv = document.createElement('div');
detailsDiv.innerHTML =
    `  <b>id: ${user.id},<br>
        name: ${user.name},<br>
        username: ${user.username},<br>
        email: ${user.email},<br>
        address:<br>
        street: ${user.address.street},<br>
        suite: ${user.address.suite},<br>
        city: ${user.address.sity},<br>
        zipcode:${user.address.zipcode},<br>
        geo:<br>
        lat: ${user.address.geo.lat},<br>
        lng: ${user.address.geo.lng}<br>
        phone: ${user.phone},<br>
        website: ${user.website},<br>
        company:<br>
        name: ${user.company.name},<br>
        catchPhrase:${user.company.catchPhrase},<br>
        bs: ${user.company.bs}</b><br>`

detailsDiv.style.background = '#9b9ad4';
detailsDiv.style.border = '3px solid blue';
detailsDiv.style.margin = '20px';
detailsDiv.style.padding = '10px';
    let postButton = document.createElement('button');
    postButton.innerHTML = `<b>post of current user</b>`;
    postButton.style.width = '90%';
    postButton.style.margin = '40px';


let titleDiv = document.createElement('div')
titleDiv.style.display = 'flex';
titleDiv.style.flexWrap = 'wrap';



postButton.onclick =(e)=>{
    e.preventDefault()
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value =>value.json())
        .then(value => {
            for (const post of value) {
               let postDiv = document.createElement('div')
                postDiv.style.border = '2px solid blue';
                postDiv.style.padding = '5px';
                postDiv.style.margin = '3px';
                postDiv.style.width = '17%';
                postDiv.innerHTML = `<b>title : ${post.title}</b><hr>`;


                let postDetailsButton = document.createElement('button');
                postDetailsButton.innerHTML = 'Post Details';
                postDetailsButton.style.borderRadius = '15px';
                postDetailsButton.style.marginLeft = '40px';
                postDetailsButton.style.borderColor = 'blue';
                postDetailsButton.onclick = function () {
                    window.open('post-details.html?data=' +JSON.stringify(post));
                }


                postDiv.appendChild(postDetailsButton);
                titleDiv.appendChild(postDiv)
                detailsDiv.appendChild(titleDiv);
            }
        })
}



detailsDiv.appendChild(postButton);
document.body.appendChild(detailsDiv);