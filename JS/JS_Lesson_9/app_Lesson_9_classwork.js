// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
    let wrapDiv = document.createElement('div');
    document.body.appendChild(wrapDiv);
    for (const simpson of simpsons) {
         let personDiv = document.createElement('div');
         personDiv.classList.add('member');
                let h2 = document.createElement('h2');
                let p = document.createElement('p');
                let img = document.createElement('img');
                let photoDiv = document.createElement('div');
                    h2.innerHTML = `<hr> name: ${simpson.name} <br>  surname:  ${simpson.surname} <br> age: ${simpson.age}`;
                    p.innerHTML = ` <b> Info: </b>  ${simpson.info}`;
                    img.src = `${simpson.photo}`;


   personDiv.appendChild(h2);
   personDiv.appendChild(p);
   personDiv.appendChild(img);
    wrapDiv.appendChild(personDiv);
}


// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
//     Для кожної властивості елементу створити окремий блок, та помістити його у div.member

let Div2 = document.createElement('div');
document.body.appendChild(Div2);
for (const simpson2 of simpsons) {
    let person2 = document.createElement('div');
    person2.classList.add('member');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
    let img = document.createElement('img');
    let photoDiv = document.createElement('div');
    h2.innerHTML = `<hr> name: ${simpson2.name} <br>  surname:  ${simpson2.surname} <br> age: ${simpson2.age}`;
    p.innerHTML = ` <b> Info: </b>  ${simpson2.info}`;
    img.src = `${simpson2.photo}`;
    person2.style.background = 'silver';
    h2.style.color = 'purple';
    p.style.fontStyle = 'oblique '
    p.style.color = 'Brown ';

    person2.appendChild(h2);
    person2.appendChild(p);
    person2.appendChild(img);
    Div2.appendChild(person2);
}

// - Є масив
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

let   basicDiv = document.createElement('div');
document.body.appendChild(basicDiv);
basicDiv.style.marginBottom = '5px';
basicDiv.style.background= '#FFCCCC';
for (const coursesElement of coursesArray) {
    let headerDiv = document.createElement('div');
        headerDiv.innerHTML = `<b>${coursesElement.title}</b>`;
        headerDiv.style.fontSize = '30px';
        headerDiv.style.marginLeft = '200px';
        headerDiv.style.paddingTop = '5px';
        let infoDiv = document.createElement('div');
       infoDiv.style.display =  'flex';
       let monthDuration = document.createElement('h4');
           monthDuration.innerHTML = ` monthDuration:  ${coursesElement.monthDuration}`;
           monthDuration.style.width = '45%';
           monthDuration.style.background = '#CCCCFF';
       let hourDuration = document.createElement('h4');
            hourDuration.innerText = `hourDuration: ${coursesElement.hourDuration}`
            hourDuration.style.width = '45%';
            hourDuration.style.background = '#CCCCFF';
       let modulDiv = document.createElement('div');
       let moduleUl = document.createElement('ul');

    for (const model of coursesElement.modules) {
        let modelLi = document.createElement('li');
        let modelH5 = document.createElement('h5');
        modelH5.innerText = model;
        modelH5.style.background = '#CCCCCC';
    modulDiv.appendChild(moduleUl);
    moduleUl.appendChild(modelLi);
    modelLi.appendChild(modelH5);
    infoDiv.appendChild(monthDuration);
    infoDiv.appendChild(hourDuration);
    basicDiv.appendChild(headerDiv);
    basicDiv.appendChild(infoDiv);
    basicDiv.appendChild(modulDiv);
    }
}
