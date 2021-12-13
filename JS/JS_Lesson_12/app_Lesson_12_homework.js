// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post

fetch('https://jsonplaceholder.typicode.com/posts')
.then(value => value.json())
.then(value => {
 for (const post of value) {
     document.body.style.display = 'flex';
     document.body.style.width = '1200px';
     document.body.style.flexWrap = 'wrap';
    let divPost = document.createElement('div');

    divPost.style.border = '2px solid black';
     divPost.style.margin = '2px';
     divPost.style.padding = '5px';
    divPost.style.width = '18%';
    let userIdDiv = document.createElement('div');
    divPost.appendChild(userIdDiv);
    userIdDiv.innerHTML = `<b> userId:</b>  ${post.userId}`;
    userIdDiv.style.background = 'yellow';
    let idDiv = document.createElement('div');
    divPost.appendChild(idDiv);
    idDiv.innerHTML = `<b> id:</b> ${post.id}`;
     idDiv.style.background = 'blue';
    let titleDiv = document.createElement('div');
    divPost.appendChild(titleDiv);
    titleDiv.innerHTML = `<b> title:</b> ${post.title}`;
    let bodyDiv = document.createElement('div');
    divPost.appendChild(bodyDiv);
    bodyDiv.innerHTML = `<b> body:</b> ${post.body}`;
     document.body.appendChild(divPost);
    }
    });


//======================================================================================================================
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment


fetch('https://jsonplaceholder.typicode.com/comments')
.then(value => value.json())
.then(comments => {
    for (const comment of comments) {
        document.body.style.display = 'flex';
        document.body.style.width = '1200px';
        document.body.style.flexWrap = 'wrap';
        let divComment = document.createElement('div');
        divComment.style.border = '2px solid black';
        divComment.style.margin = '2px';
        divComment.style.padding = '5px';
        divComment.style.width = '18%';
        let userCommIdDiv = document.createElement('div');
        divComment.appendChild(userCommIdDiv);
        userCommIdDiv.innerHTML = `<b> postId:</b> ${comment.postId}`;
        userCommIdDiv.style.background = 'red';
        let idCommDiv = document.createElement('div');
        divComment.appendChild(idCommDiv);
        idCommDiv.innerHTML = `<b> id:</b> ${comment.id}`;
        idCommDiv.style.background = 'blue';
        let nameDiv = document.createElement('div');
        divComment.appendChild(nameDiv);
        nameDiv.innerHTML = `<b> name:</b> ${comment.name}`;
        let emailCommDiv = document.createElement('div');
        divComment.appendChild(emailCommDiv);
        emailCommDiv.innerHTML = `<b> email:</b> ${comment.email}`;
        let bodyCommDiv = document.createElement('div');
        divComment.appendChild(bodyCommDiv);
        bodyCommDiv.innerHTML = `<b> body:</b> ${comment.body}`;

        document.body.appendChild(divComment);
    }
    }
)