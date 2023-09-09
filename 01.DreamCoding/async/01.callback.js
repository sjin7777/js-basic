'use strict';


/* 1. JavaScript is synchronous (JS는 동기적) */

// hoisting: var, function declation (var 변수와 함수 선언들이 자동적으로 제일 위로 올라가는 것)

// synchronous(동기식): 정해진 순서에 맞게 코드가 실행
// asynchronous(비동기식): 언제 코드가 실행될지 예측 불가 (ex. setTimeout)
// setTimeout(arg1, arg2): 브라우저에서 제공되어지는 API로, 지정한 시간이 지나면 콜백함수(전달한 함수)를 호출. 
//                      브라우저에게 먼저 요청을 보내고, 응답을 기다리지 않음
//                      - arg1: 콜백함수
//                      - arg2: ms 시간지정(1초 = 1000ms)
// callback function: 바로 실행되는 것이 아닌, 먼저 함수를 전달하고, 조건에 따라 불러서 실행시킴

// Execute the code block by order ofter hoisting. (hoisting이 된 이후부터 코드가 작성한 순서대로 동기적으로 실행됨)


// 동기식
console.log('1');
console.log('2');
console.log('3');


// 비동기식
setTimeout(() => console.log('4'), 2000);       // 2000ms(2초) 후에 해당 함수 실행





/* 2. callback */
// 2-1. Synchronous callback (즉각적, 동기적)
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// 2-2. Asynchronous callback (나중에, 예측 불가)
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 3000);      // 3000ms(3초) 후에 해당 함수 실행








/* 3. Callback Hell Example */

class UserStorage {

    // 사용자를 로그인하게 하는 API
    loginUser(id, pwd, onSuccess, onError) {

        // loginUser함수를 호출(로그인)하면 2초정도 걸림 (2초 뒤에 해당 코드들을 실행)
        setTimeout(() => {
            if((id === 'ellie' && pwd === 'dream') || (id === 'coder' && pwd === 'academy')) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);

    }

    // 사용자의 Data를 받아서, 사용자마다 가지고 있는 역할(어드민, 게스트. ...)을 서버에게 요청해서 정보를 받아오는 API
    // 원래는 사용자가 로그인을 하면, 로그인한 사용자의 정보 안에 관련된 정보들을 한번에 백엔드에서 받아오는게 정상임. 지금의 예시는 나쁜 코드임!
    getRoles(user, onSuccess, onError) {

        // getRoles함수를 호출하면 1초정도 걸림 (1초 뒤에 해당 코드들을 실행)
        setTimeout(() => {
            if(user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);

    }
}


// 1. 사용자에게 id, pwd 입력 받기
// 2, 입력 받아온 id와 pwd를 이용해서 login 
// 3. login이 성공적으로 된다면, login한 사용자의 id를 받아오는데, 그 id를 이용해서 role(역할)을 서버에 요청해서 받아옴
// 4. 역할을 성공적으로 받아온다면, 사용자의 name과 role이 있는 object를 출력해보기


const userStorage = new UserStorage();
const id = prompt('enter your id');
const pwd = prompt('enter your password');
userStorage.loginUser(
    id
    , pwd
    , user => { 
        userStorage.getRoles(
            user
            , userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            }
            , error => { console.log(error) }
        ); 
    }
    , (error) => { 
        console.log(error) 
    }
);


// 이런 식으로 콜백 체인으로 코드를 짠다면 가독성이 너무 떨어지고, 디버깅도 쉽지 않음. 유지보수도 쉽지 않음






