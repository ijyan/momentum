const h1 = document.querySelector(".hello h1");

// className : 모든 클래스 네임을 변경해버림
// classList : class를 목록으로 작업할 수 있게 허용
// contain : 우리가 명시한 class가 HTML element의 class에 포함되어 있는지 말해줌
function handleTitleClick() {
    h1.classList.toggle("active");


}

// 위의 코드와 동일
// const clickedClass = "active";
// h1.classList.toggle(clickedClass);

// 위의 코드와 동일
// const clickedClass = "active";
// if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
// } else {
//     h1.classList.add(clickedClass);
// }

h1.addEventListener("click", handleTitleClick);
