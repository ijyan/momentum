const loginForm = document.querySelector('.login__form');
const loginInput = document.querySelector('.login__form input');
const loginGreeting = document.querySelector('.login__greeting');
const greeting = document.querySelector('.login__greeting--text');
const user = document.querySelector('.login__greeting--user');

// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// submit이 되면 작동
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    loginGreeting.classList.add('ani-fadeup2');
    const date = new Date();
    const hours = date.getHours();
    if (hours > 17) {
        greeting.innerText = `Good Evening,`;
    } else if (hours < 12 && hours > 5) {
        greeting.innerText = `Good Morning,`;
    } else if (hours >= 12 && hours <= 17) {
        greeting.innerText = `Good Afternoon,`;
    } else {
        greeting.innerText = `It is time to go to bed,`;
    }
    user.innerText = `${username}!`;
    loginGreeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginGreeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

const logOut = document.querySelector('.btn-logout');

function onLogout() {
    if (confirm('Do you want to logout?')) {
        localStorage.clear();
        location.reload();
    }
}

logOut.addEventListener('click', onLogout);
