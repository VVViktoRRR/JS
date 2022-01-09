let url = new URL (location.href);
let post = JSON.parse(url.searchParams.get('data')) ;
let postDiv = document.createElement('div');
postDiv.innerHTML = `<h3> User ID : <b>${post.userId}</b><br>
                             Post ID :<b> ${post.id}</b><br>
                             Title: <b>${post.title}</b><br>
                             Body: <b>${post.body}</b><hr>
                             </h3>
                                 <h3> Comments: </h3>`;

postDiv.style.background = '#9b9ad4';
postDiv.style.border = '3px solid blue';
postDiv.style.margin = '20px';
postDiv.style.padding = '10px';

let titlePostDiv = document.createElement('div')
titlePostDiv.style.display = 'flex';
titlePostDiv.style.flexWrap = 'wrap';
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {

        for (const comment of value) {
            let commentDiv = document.createElement('div');
            commentDiv.style.border = '2px solid blue';
            commentDiv.style.margin = '5px';
            commentDiv.style.padding = '5px';
            commentDiv.style.width = '23%';
            commentDiv.innerHTML =
                `<b>postId :</b> ${comment.postId},<br>
                 <b>id : </b>${comment.id},<br>
                 <b>name: </b>${comment.name},<br>
                 <b>email:</b>${comment.email},<br>
                 <b>body:</b>${comment.body}<br>`

            postDiv.appendChild(titlePostDiv)
            titlePostDiv.append(commentDiv);
        }
    });

document.body.appendChild(postDiv);
