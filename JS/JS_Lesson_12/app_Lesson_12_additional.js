document.body.style.display = 'flex';
document.body.style.flexWrap = 'wrap';
document.body.style.background = '#bfc9bf';
document.body.style.width = '1200px';

fetch('https://jsonplaceholder.typicode.com/users')
.then (value => value.json())
.then( users => {
   for (const user of users) {

       let userDiv = document.createElement('div');
       userDiv.style.width = '19%';
       userDiv.style.paddingLeft = '5px';
       userDiv.style.margin = '1px';
       userDiv.style.border = '2px solid blue';
       userDiv.style.background = 'silver';
       userDiv.innerHTML = `<b> id: </b> ${user.id}<br>
                            <b> name: </b> ${user.name}<br>
                            <b> username: </b> ${user.username}<br>
                            <b> email: </b> ${user.email}<br>
                            <b> address: </b><br>`;
       let addressDiv = document.createElement('div');
       userDiv.appendChild(addressDiv);
       addressDiv.style.marginLeft = '20px';
       addressDiv.style.width = '100%';
       addressDiv.innerHTML = `<b> street: </b> ${user.address.street}<br>
                               <b> suite: </b> ${user.address.suite}<br>
                               <b> city: </b> ${user.address.city}<br>
                               <b> zipcode: </b> ${user.address.zipcode}<br
                               <b> geo: </b> <br>`

       let geoDiv = document.createElement('div');
       userDiv.appendChild(geoDiv);
       geoDiv.style.marginLeft = '40px';
       geoDiv.style.width = '100%';
       geoDiv.innerHTML = `<b> lat: </b> ${user.address.geo.lat}<br>
                           <b> lng: </b> ${user.address.geo.lng}<br>`
       let contDiv = document.createElement('div');
       userDiv.appendChild(contDiv);
       contDiv.style.width ='100%';
       contDiv.innerHTML = `<b> phone: </b> ${user.phone}<br>
                            <b> website: </b> ${user.website}<br>
                            <b> company: </b> <br>`
       let companyDiv = document.createElement('div');
       userDiv.appendChild(companyDiv);
       companyDiv.style.width = '100%';
       companyDiv.style.marginLeft = '20px';
       companyDiv.innerHTML = `<b> name: </b> ${user.company.name}<br>
                               <b> catchPhrase: </b> ${user.company.catchPhrase}<br>
                               <b> bs: </b> ${user.company.bs}<br>`

       let postButton = document.createElement('button');
       userDiv.appendChild(postButton);
       postButton.innerHTML = `All post this user`;
       postButton.style.fontSize = '15px';
       postButton.style.background = '#ef61c7';
       postButton.style.borderRadius = '20px';

postButton.onclick = (e) => {
           e.preventDefault();
           fetch('https://jsonplaceholder.typicode.com/posts')
               .then(value => value.json())
               .then(posts => {
                       for (const post of posts) {
                       if ( post.userId === user.id ) {
                           let posDiv = document.createElement('div');
                           userDiv.appendChild(posDiv);
                           posDiv.style.width = '100%';
                           posDiv.style.background = '#ef61c7';
                           posDiv.innerHTML = `<hr><b>id :</b> ${post.id}<br>
                                               <b>title :</b> ${post.title}<br>
                                               <b>body :</b> ${post.body}<br>`;

                           let commentsButton = document.createElement('button');
                           posDiv.appendChild(commentsButton);
                           commentsButton.style.fontSize = '15px'
                           commentsButton.innerText = 'comments';
                           commentsButton.style.background = '#3498ca';
                           commentsButton.style.color = 'white';
commentsButton.onclick = (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(comments => {
            for (const comment of comments) {
                if (comment.postId === post.userId) {
                    console.log(comment);
                    let commentDiv = document.createElement('div');
                    posDiv.appendChild(commentDiv);
                    commentDiv.style.width = '100%';
                    commentDiv.style.background = '#3498ca';
                     commentDiv.innerHTML = `<b> id: </b> ${comment.id} <br>
                                             <b> body: </b> ${comment.body}<hr>`;
                }

            }
        })
}
                       }
                       }
               })
       }
       document.body.appendChild(userDiv);
            }
        })








