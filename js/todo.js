const toDoForm = document.querySelector('.todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // 클릭된 버튼의 부모(li)를 삭제
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newToDo) {
    const list = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = newToDo;
    const button = document.createElement('button');
    button.innerText = '❌';
    button.addEventListener('click', deleteToDo);
    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // input의 현재 value를 새로운 변수에 대입
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // forEach: array에 있는 각각의 item에 대해서 function을 실행하게 해준다
    parsedToDos.forEach(paintToDo);
    // function을 만들지 않고 사용할 때
    // parsedToDos.forEach((item) => console.log('this is the turn of ', item));
}
