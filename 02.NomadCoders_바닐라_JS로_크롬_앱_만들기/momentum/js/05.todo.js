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
function paintToDo1(newTodo) {
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

function deleteToDo1(event) {
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

function handleToDoSubmit1(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = '';

    paintToDo(newTodo);
}

// toDoForm.addEventListener("submit", handleToDoSubmit1);







/* 7.3 - Saving To Dos */
// 새로고침하면 입력한 todo가 사라지므로 localStorage를 이용해서 저장하고 불러오기
const TODOS_KEY = 'todos';

// newTodo의 text를 배열에 담기
let toDos = [];

// toDos array의 내용을 localStorage에 넣는 함수
// 이 함수가 호출되는 시점에는 array에 newTodo가 들어있음
function saveToDos1() {
    localStorage.setItem(TODOS_KEY, toDos);
}


function handleToDoSubmit1(event) {
    event.preventDefault();
    
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    
    // toDos array에 push한 후 newTodo 그리기
    toDos.push(newTodo);
    paintToDo(newTodo);
    
    // to-Do 저장하기(toDos array를 localStorage에 넣기)
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


// localStorage에 배열형식으로 toDos 저장하기
// 참고로 localStorage에 array는 저장할 수 없고, 오직 텍스트만 저장할 수 있다
// 개발자 도구 > Application > Storage > Local Storage > Value 에서 보면 todo가 밑에처럼 나오는데 array형식 그대로 나오게 해야 함
// todos	1,2,3,4,5
// 그렇기에 JS에서 뭐든지(Object, array, ...) string으로 변환해주는 API인 JSON.stringify()를 사용해서 array형식으로 만듦
// todos	["1","2","3","4","5"]

// 예시. object 타입을 string으로 변환하기 
// const player = {name: "nico"};
// console.log(`${typeof player}, ${player}`);                 // object, [object Object]
// const strPlayer = JSON.stringify(player);
// console.log(`${typeof strPlayer}, ${strPlayer}`);           // string, {"name":"nico"}


// toDos를 JSON.stringify로 변환하기
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}



// localStorage에 저장은 하지만, 새로고침하면 화면에 나타나지 않고, todo를 추가하면 덮어씌워짐










/* 7.4 - Loading To Dos part One */
/* 7.5 - Loading To Dos part Two */

// JSON.stringify(): 값 => string
// JSON.stringify([1, 2, 3, 4]);           // "[1,2,3,4]"       (string)

// JSON.parse(): string => object
// JSON.parse("[1,2,3,4]");                 // [1, 2, 3, 4]     (object)


localStorage.getItem(TODOS_KEY);                 // '["a","b","c","d","e","f"]' (단순한 string)
JSON.parse(localStorage.getItem(TODOS_KEY));     // (6) ['a', 'b', 'c', 'd', 'e', 'f'] (무언가를 할 수 있는 array)


const savedToDos = localStorage.getItem(TODOS_KEY);

// console.log(savedToDos);                    // ["a","b","c"] (string)
// localStorage에서 가지고 온 string을 object로 변환
if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    // console.log(parsedToDos);               // (3) ['a', 'b', 'c'] (array)

    // parsedToDos를 넣어서 toDos에 이전에 있던 toDo들을 복원함
    toDos = parsedToDos;

    // array인 parsedToDos의 각각의 원소들을 화면에 그려서 출력함
    parsedToDos.forEach(paintToDo);
}


// 하지만 새로 추가한 것들만 localStorage에 저장되고, 예전에 저장한 것은 없음
// 화면에서는 예전 것들이 복원되어 보이고, 추가도 되는데 예전 것을 덮어쓰는 것임
// 덮어씌우는게 아닌, 추가하는 것으로 수정하려면?

// 일단, 이런 일이 발생되는 이유
// 1. application이 시작될 때 const toDos = []; 여서 이 배열의 값은 항상 비어있기 때문
// 2. newToDo를 작성하고 form을 submit 할 때마다 newToDo를 빈 배열인 toDos에 push하게 됨
// 3. toDo를 저장할 때 새로운 toDo들만 포함하고 있는 array를 저장하고 있음. 
//  즉, 이전의 toDo들은 가지고 있지 않음
//  전에 있던 toDo들은 localStorage에 들어있고, 새로운 toDo들은 사용자가 입력하는 것들임
//  toDos array에 newTodo들만 localStorage에 저장하고 있는 것을 수정해야 함 (toDos의 이전 복사본을 잊어버리고 있기 때문)

// 해결
// application이 시작할 때 toDos array를 빈 값으로 시작하게 하지 말고, 
// localStorage에 toDo들이 들어있으면, toDos에 parsedToDos를 넣어서 전에 있던 toDo를 복원함     // toDos = parsedToDos;
// (toDos array는 업데이트가 되어야 하므로 const가 아닌 let으로 선언해야 함)


// 하지만, 삭제하고 새로고침하면 화면에 다시 보임 (local Storage에도 해당 todo가 삭제되어있지 않음)
// 화면에서는 삭제를 했지만, local Storage에서는 지우지 않았기 때문








/* 7.6 - Deleteing To Dos part One */
// to-do를 지울 때 마다 local storage가 업데이트 되어야 함
// local storage는 toDos array를 복사하는 곳, toDos array !== local storage 라고 생각하기

// deleteToDo() 함수로 인해 HTML, JS는 어떤 HTML의 element를 지워야 하는지 알고 있음
// 하지만 어떤 todo text를 local storage에서 지워야하는지는 모름
// local storage에 있는 todo text 대신 object를 만들기
// array 안에 object가 있고, object에 id와 text를 가지는 array 만들어보기
// [{id:121212, text:"todo내용"}]

// 1. local storage에 있는 toDos의 value 값 비우기
// 2. element가 만들어질 때 ID를 갖게 하기      => id = Date.now()      // Date.now()는 밀리초(1000분의 1초)를 주는 함수
// 3. local storage에 todo 내용을 추가하게 하는 handleToDoSubmit() 함수 수정하기
//      - text만 push 하게 하는게 아닌 id,text 둘 다 가지고 있는 object를 push 
//       => const newToDoObj = { id: Date.now(), text: newTodo};
//          toDos.push(newToDoObj);
//      - 화면에 보여주게 하는 paintToDo에도 text만 넘기는게 아니라 id, text 둘 다 가지고 있는 object를 넘김
//          paintToDo(newToDoObj);
//      - 지금 상태로 todo를 추가하면 [object Object] 로 나옴
// 4. 오직 text인 newTodo만으로 그리는 paintToDo() 함수 수정하기
//      - 생성한 HTML li 태그 id의 값을 newToDoObj object의 id의 값으로 함 
//      - span의 innerText를 newToDoObj object의 text의 값으로 할당




// id, text 둘 다 받는 object를 받아야 함
function paintToDo(newToDoObj) {
    // ul > li > span, span
    const li = document.createElement('li');
    
    // HTML li 태그의 id 지정
    li.id = newToDoObj.id;

    const span = document.createElement('span');
    span.innerText = newToDoObj.text;
    
    const btn = document.createElement('button');
    btn.innerText = '❌';
    btn.addEventListener('click', deleteToDo);

    
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
    
}


function handleToDoSubmit(event) {
    event.preventDefault();
    
    const newTodo = toDoInput.value;
    toDoInput.value = '';
    
    // toDos array에 local storage에 사용자가 적어둔 text인 newTodo를 push
    // toDos.push(newTodo);

    // text가 아닌 ID와 text가 같이 있는 object를 push
    const newToDoObj = { 
        id: Date.now()
        , text: newTodo
    };
    
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    
    // to-Do 저장하기(toDos array를 localStorage에 넣기)
    saveToDos();
}



// to-do 삭제 버튼의 id를 알아내야 local storage에서의 해당 값을 삭제할 수 있음
// 이전의 deleteToDo() 함수에서는 화면에서 li를 삭제하기 전에 li를 얻게 됨 (즉, li의 id도 얻을 수 있음)







/* 7.7 - Deleteing To Dos part Two */

// 1. array에서 element를 삭제하려면 해당 코드에 대하여 잘 이해하고 있어야 함
// parsedToDos.forEach(paintToDo);          // forEach로 인하여 paintToDo()를 기본적으로 실행함
// => forEach 함수: paintToDo() 함수를 parsedToDos 배열의 요소마다 실행함
//                forEach는 각각의 item을 주는데, 그 item이 object가 됨
// 2. array에서 지우고 싶은 item을 제외할 때, filter() 함수를 사용하여 새로운 array를 만듦 
//   (item을 지우는 것이 아닌, item을 제외하는 것. 그렇기에 기존 array의 요소는 그대로 있음)



// filter() 예시 1 - 3을 제외하고 나머지 리턴
function exFilter1(item) {
    return item !== 3;
}

// filter() 함수는 exFilter() 함수를 불러서 배열의 원소들을 차례대로 넣고 실행함
// 만약 새 array에서 이 object를 유지하고 싶으면, exFilter()함수는 반드시 true를 리턴해야 함
// false를 리턴하면 그 item은 새 array에 포함되지 않게 됨
// 배열의 길이가 4이므로 JS는 exFilter()함수를 4번 부름
// true를 리턴하면 해당 원소를 유지하게 됨
[1, 2, 3, 4].filter(exFilter1);

// 위 코드와 같음
// exFilter(1);
// exFilter(2);
// exFilter(3);
// exFilter(4);


// filter() 예시 2 - 바나나 제외하기
const arr1 = ['pizza', 'banana', 'tomato'];
function exFilter2(food) { return food !== 'banana'}
// console.log(arr1.filter(exFilter2));             // (2) ['pizza', 'tomato']

// filter() 예시 3 - 1000보다 큰 수 제외하기
const arr2 = [1234, 5454, 223, 122, 45, 6775, 334];
function exFilter3(num) { return num <= 1000 }
// console.log(arr2.filter(exFilter3));            // (4) [223, 122, 45, 334]

// filter() 예시 4 - id가 1694254812644 object 제외하기
const arr3 = [{id: 1694254810748, text: "a"}, {id: 1694254812644, text: "b"}, {id: 1694254814203, text: "c"}];
function exFilter4(todo) {  return todo.id !== 1694254812644 }
// console.log(arr3.filter(exFilter4));

// filter() 예시 5 - text가 'a'인 object 제외하기
function exFilter5(todo) { return todo.text !== 'a' }
// console.log(arr3.filter(exFilter5));


// filter()는 지정한 array의 item을 지정한 function의 argument로 넣어줌











/* 7.8 - Deleteing To Dos part Three */
// filter() 함수는 새 array를 주고 기존 array로 작업하지 않는다는 점을 기억하기

// filter() 예시 6 - 2보다 큰 수
const arr4 = [1, 2, 3, 4, 5];
const newArr = arr4.filter(item => item > 2);
// console.log(arr4);                      // (5) [1, 2, 3, 4, 5]      => filter() 실행 전과 똑같음
// console.log(newArr);                    // (3) [3, 4, 5]



// deleteToDo() 함수에서 filter() 함수를 사용하여 선택한 요소 local storagy에서도 제외하기
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    console.log(li.id);
    console.log(typeof li.id);

    // 클릭한 li.id 제외시키기
    // li.id는 string이고, toDo.id는 number기 때문에 형변환후에 제외시켜야 함
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

    // local storagy에서 todo를 지우고, saveToDos()를 다시 호출해야 함
    // filter()로 새로운 배열을 만들었기 때문!
    saveToDos();
}