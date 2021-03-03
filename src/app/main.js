import '../styles/main.scss';

// // TODO: check login and redirect
// const LOGIN_KEY = 'login';
// localStorage.setItem(LOGIN_KEY, JSON.stringify(true));

// const isLoggedIn = JSON.parse(localStorage.getItem(LOGIN_KEY));

// console.log(isLoggedIn);

let url = document.location.href;
let menuArr = document.querySelectorAll('a');

for (let i of menuArr){
    if (i.href == url){
        i.style.color ='red';
        i.style.textDecoration ='underline';
    }else{
        i.style.color ='black';
    }
}


let rowActive = localStorage.getItem('active');
console.log(rowActive);

if (!rowActive && window.location.href != 'http://localhost:8080/login.html'){
    window.location.href = 'http://localhost:8080/login.html'
}


let logoutBtn = document.querySelector('.logout-btn')
logoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    localStorage.removeItem('active');
    window.location.href = 'http://localhost:8080/login.html'
})