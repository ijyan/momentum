const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    // preventDefault : 브라우저가 기본 동작을 실행하지 못하게 막기
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

