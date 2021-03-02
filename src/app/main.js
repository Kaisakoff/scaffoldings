import '../styles/main.scss';

// TODO: check login and redirect
const LOGIN_KEY = 'login';
localStorage.setItem(LOGIN_KEY, JSON.stringify(true));

const isLoggedIn = JSON.parse(localStorage.getItem(LOGIN_KEY));

console.log(isLoggedIn);
