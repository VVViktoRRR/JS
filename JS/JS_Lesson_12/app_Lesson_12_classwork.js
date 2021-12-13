// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
.then(value => value.json())
.then(posts => {
    for (const post of posts) {
        let divPost = document.createElement('div');
        divPost.style.width = '18%';
        divPost.style.border = '3px solid blue';
        divPost.style.padding = '5px';
        divPost.style.margin = '3px';
        let idPost = document.createElement('div');
        divPost.appendChild(idPost);
        idPost.innerHTML = `<b>id:</b>${post.id}`;
        let titlePost = document.createElement('div');
        divPost.appendChild(titlePost);
        titlePost.innerHTML = `<b>title:</b>${post.title}`;
        let bodyPost = document.createElement('div');
        divPost.appendChild(bodyPost);
        bodyPost.innerHTML = `<b>body:</b>${post.body}`;

        let buttonInfo = document.createElement('button');
        divPost.appendChild(buttonInfo);
        buttonInfo.innerHTML = 'all comments this user';
        buttonInfo.style.borderRadius = '30px';
        buttonInfo.style.background = '#B3A33C';
        buttonInfo.addEventListener('click', function output(e) {
            e.preventDefault()
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(value => value.json())
                .then(comments => {
                    for (const comment of comments) {
                        if ( post.userId === comment.postId ) {
                            let commentDiv = document.createElement('div');
                            commentDiv.style.background = '#B3A33C'
                            commentDiv.innerHTML = `<b>id :</b> ${comment.id} <br> <b>body:</b> ${comment.body}`;
                            divPost.appendChild(commentDiv);
                        }
                    }
                })
        })
        document.body.style.display = 'flex';
        document.body.style.flexWrap = 'wrap';
        document.body.style.width = '1200px';
        document.body.style.background = 'silver';
        document.body.appendChild(divPost);
    }
})
