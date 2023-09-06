'use strict';


/* 4.0 - input Values */
/* 4.1 - Form Submission */
const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginBtn = loginForm.querySelector('button');

// const loginInput = document.querySelector('#login-form input');
// const loginBtn = document.querySelector('#login-form button');


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
// 3. 그렇기에 form이 submit이 되는걸 막아야 함





/* 4.2 - Events */


