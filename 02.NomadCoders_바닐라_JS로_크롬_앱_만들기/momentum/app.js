'use strict';


/* 4.0 - input Values */
/* 4.1 - Form Submission */

const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
// const loginBtn = loginForm.querySelector('button');

function handleLoginBtnClick() {
    const userName = loginInput.value;
    
    if(userName === '') {
        alert('Please write your name');
    } else if(userName.length > 15) {
        alert('Your name is too long');
        loginInput.value = '';
    } else {
        console.log('userName >> ' + userName);
    }
}

// loginBtn.addEventListener('click', handleLoginBtnClick);




// html에서 값 체크하기
// 1. input 태그가 form 태그 안에 존재해야 함
// 2. input 태그에 속성 넣기
//  - required: 반드시 입력
//  - maxlength="길이": 해당 길이만큼만 보여짐

// 버튼
// 1. 버튼의 type이 submit이면 클릭이벤트를 지정하지 않아도 됨
// 2. submit일 경우 매번 페이지가 새로고침 됨
// 3. 그렇기에 form이 submit이 되는걸 막거나 submit event가 발생했다는 것을 파악해야함





/* 4.2 - Events */
// form 태그의 기본 동작: submit
// submit event: submit은 엔터를 누르거나 버튼을 클릭할 때 발생하고 늘 새로고침을 함
// 함수명에 ()가 붙으면 브라우저가 바로 함수를 실행함


/* 모든 EventListener function의 첫번째 argument는 항상 함수를 실행했을 시에 벌어진 일들에 대한 정보를 나타낸다 */
    // 해당 함수가 하나의 argument를 받도록 하고 JS에 넘겨주게 되면, 
    // 함수를 호출할 때 이 함수에 대한 정보가 채워진 채로 호출이 됨
    // 함수에 대한 정보(event object를 담은 정보)가 필요할 때 사용하기
function submitInfo(event) {
    
    // 이 event에 대한 정보 확인하기
    console.log(event);
    
    // 그러나 확인하려면 새로고침이 되는 type인 submit의 event를 막아주어야 함
        // preventDefault(): event가 발생되지 않도록 막아주는 기본 제공 함수 (브라우저의 기본 동작을 막아줌)
        // 이 함수를 사용하여 submit이어도 새로고침이 되지 않도록 함
        event.preventDefault();
        
    // 이 event에 대한 정보 일부
        // submitter: submit 주체가 무엇인가(무엇으로 인해 submit 되었는가) => input
        // target: 대상은 무엇인가 => form
        // timeStamp: 어제 submit 되었는가 
    }
    
    // 해당 form을 submit하면 js가 이 function을 호출하고, js는 이 함수의 첫번째 argument로 함수에 대한 정보들을 줌
    // loginForm.addEventListener('submit', submitInfo);


function onLoginSubmit1(event) {
    // event 발생 막음 (submit 이므로 새로고침 막음)
    // submit의 event를 컨트롤 하는 것
    event.preventDefault();

    const userName = loginInput.value;
    console.log(userName);
}
// submit event가 발생할 때 JS는 onLoginSubmit function을 호출하고 있고, 이 때 event object를 argument로 주고 있음
// loginForm.addEventListener('submit', onLoginSubmit1);






/* 4.3 - Events part Two */

// addEventListener 안에 있는 함수는 직접 실행하지 않고, 브라우저가 실행시켜줌
// 브라우저에서는 해당 event에 대한 정보인 object를 가지게 되고,
// addEventListener의 함수에서 object에 대한 자리만 할당해주면(생성할 함수에 첫번째 인자로 object를 넣어준다면),
// 해당 event가 발생시킨 정보들에 대한 object들을 확인할 수 있음
// 이 정보 안에는 여러 함수가 같이 들어있는데,
// 이때 해당 event가 가진 Default event를 발생시키지 않게 하기 위해서는 preventDefault()를 이용하면 됨


// a 태그의 기본 동작: 클릭 시 다른 페이지로 이동
// a 태그의 기본 동작 event 막아보기

const link = document.querySelector('a');

function handleLinkClick(event){
    // 해당 링크로 이동하는 기본 동작 event 막기
    event.preventDefault();
    
    // alert은 모든 동작을 막고, 메시지를 보여줌
    // 모든 것들이 막혀있을 때, alert 메시지에 ok를 클릭하면 해당 페이지로 이동하게 됨(다시 기본 동작 실행)
    alert('clicked!');


    // 이 event에 대한 정보 내부 확인하기
    console.dir(event);

    // 이 event에 대한 정보 일부
        // screenX, screenY: 유저가 스크린 상 클릭한 위치의 X, Y의 좌표 (유저가 어디를 클릭했는지 알 수 있음)
        // path: 클릭 시 무슨 일이 있었는지, 어디에서 발생했는지 array로 보여줌..(근데 내 브라우저에서는 안 보임)
        console.log(event.path);    // undefined

}
// link.addEventListener('click', handleLinkClick);







/* 4.4 Getting Username */
// form에 있는 value를 제출하고 난 뒤에 form을 제거하는 방법
// 1. html 요소 자체를 없애기
// 2. css 이용하여 숨기기

const greeting = document.querySelector("#greeting");
// 변수명이 대문자인 이유
// 1. 일반적으로 string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 때 사용함
// 2. 중요한 정보를 담은게 아니기 때문
const HIDDEN_CLASSNAME = 'hidden';

// Log In 버튼 클릭 시 
function onLoginSubmit2(event) {
    const userName = loginInput.value;
    // submit 시에 발생할 기본 동작 event인 새로고침 막기
    event.preventDefault();

    // loginForm 요소에 'hidden'클래스(속성 - display: none;)를 추가하여 form을 숨김 
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // greeting값으로 userName을 넣어주기
    // greeting.innerText = 'Hello ' + userName;
    greeting.innerText = `Hello ${userName}`;           // ``는 변수와 string을 결합하고 싶거나 변수를 string안에 집어넣고 싶을 경우에 사용
    

    // greeting 요소는 form이 숨겨지면, 노출하기 (단, greeting에 표시할 텍스트가 있을 때만 표시되도록 함)
    // greeting 요소는 기본적으로 클래스가 'hidden'이므로 제거하면 해당 텍스트가 노출됨

    // 영상에서는 조건 안 주고 remove만 되어있어서 일단 조건문 주석처리
    // if(greeting.classList.contains(HIDDEN_CLASSNAME) && greeting.innerText !== '') {
        greeting.classList.remove(HIDDEN_CLASSNAME);
    // };

}

// loginForm.addEventListener('submit', onLoginSubmit2);









/* 4.5 - Saving Username */
// Local Storage: 브라우저에 저장할 수 있게 해줌
// Local Storage 위치: 개발자 도구 > Application > Storage > Local Storage
// Local Storage API: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage


// localStorage.setItem('key', 'value'):    localStorage에 정보 저장
// localStorage.getItem('key'):             localStorage에 저장되어 있는 해당 key의 value의 값을 가져오기
// localStorage.removeItem('key'):          localStorage에 저장되어 있는 해당 key와 value의 값을 삭제하기
// localStorage.clear();                    localStorage 다 지우기


// user가 userName의 값을 제출할 때 localStorage에 저장하기
function onLoginSubmit3(event) {
    const userName = loginInput.value;
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    // localStorage에 저장될 값의 이름(key)와 저장될 값(userName) 넣기
    localStorage.setItem('userName', userName);

    greeting.innerText = `Hello ${userName}`;
    
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}

// loginForm.addEventListener('submit', onLoginSubmit3);



// 그런데 아직도, 새로고침을 하면 form이 노출되고, greeting이 보이지 않음
// 1. local storage에 userName이 존재하는지 확인
// 2-1. 유저 정보가 있을 경우 - form 숨기고 h1 요소 노출
// 2-2. 유저 정보가 없을 경우 - form 노출






/* 4.6 - Loading Username */
// form을 보여주고, addEventListener를 하기 전에 local storage 먼저 확인해야 함
// local storage가 비어있으면 => form 노출
// local storage가 비어있지 않다면 => form 숨기고, h1 노출


// string을 반복해서 사용하므로 변수로 고정
const USERNAME_KEY = 'userName';


// local storage에 유저정보 유무 확인
const savedUserName = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}


function onLoginSubmit(event) {
    event.preventDefault();
    
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userNameThatTheUserWrote = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userNameThatTheUserWrote);
    paintGreetings(userNameThatTheUserWrote);
}


// 1. form과 greeting 모두 숨긴 채로 시작하기 => index.html form태그에 hidden classname 추가하기
// 2. hidden 클래스 추가/삭제하며 새로고침해도 화면이 변하지 않도록 조건문 짜기
if(savedUserName === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUserName);
}




/* 4.7 - Super Recap */
// local storage: 정보를 저장하고 불러오고 삭제하는 브라우저가 가지고 있는 작은 DB 같은 API

/* 

1. form과 h1은 둘 다 hidden 상태

2. js가 local storage를 확인함 => localStorage.getItem('key');

3-1. local storage에 정보가 없을 경우 값은 null
    loginForm에 있는 HIDDEN_CLASSNAME 클래스 제거 => loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm에 addEventListener를 더하고 submit 실행   =>  loginForm.addEventListener('submit', onLoginSubmit);
    submit event가 발생하면 onLoginSubmit 함수 실행     
        >> 3-1-1. 기본 동작 event(submit이므로 페이지 새로고침) 막음  => event.preventDefault();
        >> 3-1-2. form을 다시 숨김  => loginForm.classList.add(HIDDEN_CLASSNAME);
        >> 3-1-3. loginInput.value를 userName이라는 변수로 저장     => const userNameThatTheUserWrote = loginInput.value;
        >> 3-1-4. userName 값을 userName 이라는 key와 함께 local storage에 저장     => localStorage.setItem(USERNAME_KEY, userNameThatTheUserWrote);
                (개발자 도구 > Application > Storage > Local Storage 에서 확인 가능)

3-2. local storage에 정보가 있을 경우

4. form 안에 있는 input에 입력한 유저명을 받는 paintGreetings() 함수 호출  
    => 3-1. paintGreetings(userNameThatTheUserWrote);
    => 3-2. paintGreetings(savedUserName)

    ** paintGreetings(userName) 함수
        - userName이라는 인자를 하나 받고 있고, 비어있는 h1 요소 안에 `Hello ${username}` 이라는 텍스트를 추가해줌
        - h1 요소로부터 HIDDEN_CLASSNAME 클래스 제거해줌

5. h1요소가 노출됨

 */