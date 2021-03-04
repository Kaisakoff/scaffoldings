import '../styles/login.scss';

const entryForm = document.querySelector('.entry-form');
const preRegForm = document.querySelector('.pre-reg-form');
const regForm = document.querySelector('.reg-form');

const entryLogin = document.querySelector('.entry-login');
const regLogin = document.querySelector('.reg-login');

const entryPassrord = document.querySelector('.entry-pass');
const regPassrord = document.querySelector('.reg-pass');

preRegForm.addEventListener('submit', (event) => {
  event.preventDefault();

  entryForm.style.display = 'none';
  preRegForm.style.display = 'none';
  regForm.style.display = 'flex';
});

regForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const key = {
    [regLogin.value]: regPassrord.value,
  };

  localStorage.setItem(regLogin.value, JSON.stringify(key));

  entryForm.style.display = 'flex';
  preRegForm.style.display = 'flex';
  regForm.style.display = 'none';
});

entryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const key = entryLogin.value;
  const passwordValue = entryPassrord.value;
  const getRow = localStorage.getItem(key);
  const getObj = JSON.parse(getRow);

  if (getObj) {
    if (getObj[key] === passwordValue) {
      localStorage.setItem('active', key);
      // console.log(localStorage.getItem('active'));
      window.location.href = 'http://localhost:8080/home.html';
    } else {
      const span = document.createElement('span');
      span.append('Password not correct. Please try agen!');
      span.style.color = 'red';
      span.classList.add('message');
      const message = entryForm.querySelector('.message');

      if (message) {
        message.remove();
        entryPassrord.after(span);
      } else {
        entryPassrord.after(span);
      }
    }
  } else {
    const span = document.createElement('span');
    span.append('E-mail not correct. Please try agen!');
    span.style.color = 'red';
    span.classList.add('message');
    const message = entryForm.querySelector('.message');

    if (message) {
      message.remove();
      entryLogin.after(span);
    } else {
      entryLogin.after(span);
    }
  }
});

const checkMail = (element) => {
  let correctForm;
  let correctWindow;

  if (element === regLogin) {
    correctForm = regForm;
    correctWindow = regLogin;
  } else {
    correctForm = entryForm;
    correctWindow = entryLogin;
  }

  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  const email = element.value;

  if (reg.test(email)) {
    const span = document.createElement('span');
    span.append('email correct');
    span.style.color = 'green';
    span.classList.add('message');
    const message = correctForm.querySelector('.message');
    const btn = correctForm.querySelector('button');
    btn.disabled = false;

    if (message) {
      message.remove();
      correctWindow.after(span);
    } else {
      correctWindow.after(span);
    }
  } else {
    const span = document.createElement('span');
    span.append('email not correct');
    span.style.color = 'red';
    span.classList.add('message');
    const message = correctForm.querySelector('.message');
    const btn = correctForm.querySelector('button');
    btn.disabled = true;

    if (message) {
      message.remove();
      correctWindow.after(span);
    } else {
      correctWindow.after(span);
    }
  }
};

entryLogin.addEventListener('blur', (event) => {
  event.preventDefault();
  checkMail(entryLogin);
});

regLogin.addEventListener('blur', (event) => {
  event.preventDefault();
  checkMail(regLogin);
});
