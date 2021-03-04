import '../styles/main.scss';

let changeColor = function (colorActive, colorUnactive){
    let url = document.location.href;
    let menuArr = document.querySelectorAll('a');

    for (let i of menuArr){
        if (i.href == url){
            i.style.color = colorActive;
            i.style.textDecoration ='underline';
        }else{
            i.style.color = colorUnactive;
        }
    }
}

changeColor('red', 'black');

let domen = window.location.origin;

let rowActive = localStorage.getItem('active');
console.log(rowActive);

if (!rowActive && document.location.href != domen +'/login.html'){
    document.location.href = domen +'/login.html';
}


let logoutBtn = document.querySelector('.logout-btn')
logoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem('active');
    document.location.href = domen + '/login.html';
})

