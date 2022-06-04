const toDoForm = document.querySelector('.todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.todo-list');

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
    paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
