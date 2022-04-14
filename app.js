const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    // preventDefault : 브라우저가 기본 동작을 실행하지 못하게 막기
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick(event) {
    event.preventDefault();
    console.dir(event);
}

// addEventListenr 안에 있는 함수는 직접 실행( ex : handleLinkClick() )하지 않아야한다.
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);