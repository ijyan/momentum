const toDoForm = document.querySelector('.todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo-list');

function paintToDo(newToDo) {
    const list = document.createElement('li');
    const span = document.createElement('span');
    list.appendChild(span);
    span.innerText = newToDo;
    toDoList.appendChild(list);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    // input의 현재 value를 새로운 변수에 대입
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
