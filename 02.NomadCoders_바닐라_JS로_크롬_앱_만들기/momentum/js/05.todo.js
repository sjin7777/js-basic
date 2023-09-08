'use strict';



/* 7.0 - Setup */

const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

// console.log(toDoForm);
// console.log(toDoInput);
// console.log(toDoList);

function handleToDoSubmit1(event) {
    event.preventDefault();

    // newTodo에 toDoInput의 값을 저장
    const newTodo = toDoInput.value;

    // toDoInput의 값은 비움
    toDoInput.value = '';
}

// toDoForm.addEventListener("submit", handleToDoSubmit1);








/* 7.1 - Adding ToDos */

// to-do를 그리는 함수
function paintToDo1(newTodo) {
    // ul > li > span
    const li = document.createElement('li');
    toDoList.appendChild(li);
    
    const span = document.createElement('span');
    span.innerText = newTodo;
    li.appendChild(span);
    
}

function handleToDoSubmit1(event) {
    event.preventDefault();

    // input의 value를 비우기 전의 string 값
    const newTodo = toDoInput.value;
    toDoInput.value = '';

    // to-do를 그리는 함수에 toDoInput 값을 보냄
    paintToDo(newTodo);
}

// toDoForm.addEventListener("submit", handleToDoSubmit);



// 1. 새로고침하면 다 사라짐
// 2. 지정한 to-do를 삭제하고 싶음





/* 7.2 - Deleting To Dos */
// to-do를 그리는 함수
function paintToDo(newTodo) {
    // ul > li > span, span
    // text & btn 
    const li = document.createElement('li');
    
    // to-do text
    const span = document.createElement('span');
    span.innerText = newTodo;
    
    // to-do를 삭제하는 버튼 
    const btn = document.createElement('button');
    btn.innerText = '❌';
    btn.addEventListener('click', deleteToDo);

    
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
    
}

function deleteToDo(event) {
    // console.log(event);          // path에 대한 정보가 없음.. 댓글보니 event.composedPath()로 확인하면 된다고 함

    // 어떤 element에서 클릭이 일어난 건지 확인 가능
    // console.log(event.composedPath());


    // event.target: 클릭된 HTML element
    // 모든 HTML element에는 하나 이상의 property가 있음  
    // 그 중 parentNode 또는 parentElement => 타겟의 부모가 누구인지 알려줌

    // event.target.parentNode 또는 event.target.parentElement: 클릭된 HTML eLement의 부모   
    // console.dir(event.target);      // li

    // target의 부모
    // console.log(event.target.parentElement);
    // console.dir(event.target.parentElement);
    
    // target의 부모의 innerText
    // console.dir(event.target.parentElement.innerText);

    // 그러므로 클릭한 target의 부모 = 삭제해야 할 li
    const li = event.target.parentElement;
    li.remove();

}

function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = '';

    paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);







/* 7.3 - Saving To Dos */