const toDoCont = document.querySelector('.todo');
const toDoForm = document.querySelector('.todo__form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo__list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    // 클릭된 버튼의 부모(li)를 삭제
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const list = document.createElement('li');
    list.id = newToDo.id;
    const span = document.createElement('span');
    // newTodoObj의 text 대입
    span.innerText = newToDo.text;
    const button = document.createElement('button');
    button.innerText = '✔️';
    button.addEventListener('click', deleteToDo);
    list.appendChild(span);
    list.appendChild(button);
    toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

function showTodos() {
    toDoCont.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
    toDoCont.classList.add(HIDDEN_CLASSNAME);
} else {
    toDoCont.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', showTodos);
