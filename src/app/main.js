import '../styles/main.scss';

const changeColor = (colorActive, colorUnactive) => {
  const url = document.location.href;
  const menuArr = document.querySelectorAll('a');

  for (const i of menuArr) {
    if (i.href === url) {
      i.style.color = colorActive;
      i.style.textDecoration = 'underline';
    } else {
      i.style.color = colorUnactive;
    }
  }
};

changeColor('red', 'black');

const domen = window.location.origin;
const rowActive = localStorage.getItem('active');
if (!rowActive && document.location.href !== domen + '/login.html') {
  document.location.href = domen + '/login.html';
}


const logoutBtn = document.querySelector('.logout-btn');
logoutBtn.addEventListener('click', (event) => {
  event.preventDefault();
  localStorage.removeItem('active');
  document.location.href = domen + '/login.html';
});
