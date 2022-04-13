const title = document.querySelectorAll('.hello h1');

title.innerText = 'hello!';

// getElementById() : Id 값 가지고 옴
// getElementsByClassName(), getElementsByTagName() : array 줌
// querySelector() : elemet 를 css 방식으로 검색할 수 있음 (겹칠 경우 오직 첫번째꺼만 가지고옴)
// querySelectorAll() : selector 안의 조건에 부합하는 모든 element를 가져옴

// console.dir() : element의 내부를 보고 싶을 때