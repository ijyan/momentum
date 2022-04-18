const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로 표기, string을 저장하고 싶을 때 사용, 중요한 정보를 담은게 아님.
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    // preventDefault : 브라우저가 기본 동작을 실행하지 못하게 막기
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;

    // local storage : 브라우저에 뭔가를 저장할 수 있게 해줌
    // local storage.setItem() : 저장
    // local storage.getItem() : 불러옴
    // local storage.removeItem() : 지움
    localStorage.setItem("userName", userName);

    //greeting.innerText = "Hello " + userName;
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

    // local storage : 브라우저에 뭔가를 저장할 수 있게 해줌
    localStorage.setItem()
}

// addEventListenr 안에 있는 함수는 직접 실행( ex : handleLinkClick() )하지 않아야한다.
loginForm.addEventListener("submit", onLoginSubmit);