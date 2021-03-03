import '../styles/login.scss';

let entryForm = document.querySelector('.entry-form');
let preRegForm = document.querySelector('.pre-reg-form');
let regForm = document.querySelector('.reg-form');

let enterBtn = document.querySelector('.enter-btn');
let preRegBtn = document.querySelector('.pre-reg-btn');
let regBtn = document.querySelector('.reg-btn');

let entryLogin = document.querySelector('.entry-login');
let regLogin = document.querySelector('.reg-login');

let entryPassrord = document.querySelector('.entry-pass');
let regPassrord = document.querySelector('.reg-pass');

//console.log(entryPassrord);

preRegForm.addEventListener('submit', (event) => {
    event.preventDefault();

    entryForm.style.display = "none";
    preRegForm.style.display = "none";
    regForm.style.display = "flex";
});


let userArr = [];
regForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let key = {
        [regLogin.value]: regPassrord.value,
    }
    localStorage.setItem(regLogin.value, JSON.stringify(key));

    entryForm.style.display = "flex";
    preRegForm.style.display = "flex";
    regForm.style.display = "none";
});

entryForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let key = entryLogin.value
    let passwordValue = entryPassrord.value;
    let getRow = localStorage.getItem(key);
    let getObj = JSON.parse(getRow);

    if (getObj) {
        if (getObj[key] === passwordValue) {
            localStorage.setItem('active', key);
            // console.log(localStorage.getItem('active'));
            window.location.href = 'http://localhost:8080/home.html';
        } else {
            let span = document.createElement('span');
            span.append('Password not correct. Please try agen!');
            span.style.color = 'red';
            span.classList.add('message');
            let message = entryForm.querySelector('.message');

            if (message) {
                message.remove();
                entryPassrord.after(span);
            } else {
                entryPassrord.after(span);
            }
        }

    } else {
        let span = document.createElement('span');
        span.append('E-mail not correct. Please try agen!');
        span.style.color = 'red';
        span.classList.add('message');
        let message = entryForm.querySelector('.message');

        if (message) {
            message.remove();
            entryLogin.after(span);
        } else {
            entryLogin.after(span);
        }
    }
})


entryLogin.addEventListener('blur', (event) => {
    event.preventDefault();
    checkMail(entryLogin);
})

regLogin.addEventListener('blur', (event) => {
    event.preventDefault();
    checkMail(regLogin);
})


let checkMail = (element) => {
    let correctForm;
    let correctWindow;

    if (element == regLogin) {
        correctForm = regForm;
        correctWindow = regLogin;
    } else {
        correctForm = entryForm;
        correctWindow = entryLogin;
    }

    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let email = element.value;

    if (reg.test(email)) {
        let span = document.createElement('span');
        span.append('email correct');
        span.style.color = 'green';
        span.classList.add('message');
        let message = correctForm.querySelector('.message');
        let btn = correctForm.querySelector('button');
        btn.disabled = false;

        if (message) {
            message.remove();
            correctWindow.after(span);
        } else {
            correctWindow.after(span);
        }

    } else {
        let span = document.createElement('span');
        span.append('email not correct');
        span.style.color = 'red';
        span.classList.add('message');
        let message = correctForm.querySelector('.message');
        let btn = correctForm.querySelector('button');
        btn.disabled = true;

        if (message) {
            message.remove();
            correctWindow.after(span);
        } else {
            correctWindow.after(span);
        }
    }
}

