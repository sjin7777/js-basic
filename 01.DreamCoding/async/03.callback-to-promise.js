'use strict';



// 01.callback.js에서 생성한 예제를 promise를 이용하여 변경해보기.
// 콜백지옥은 promise chaining으로 변경하기


/* Callback Hell Example */
/*
{
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
}
*/




/* promise 이용하여 고쳐보기 - 풀이 */
/*
{
class UserStorage {

    loginUser(id, pwd) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((id === 'ellie' && pwd === 'dream') || (id === 'coder' && pwd === 'academy')) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }


    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        });
    }

}

const userStorage = new UserStorage();
const userId = prompt('Enter Your Id');
const userPwd = prompt('Enter Your Password');
userStorage.loginUser(userId, userPwd)
            .then(userStorage.getRoles)
            .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
            .catch(console.log);

}
*/





/* promise 이용하여 고쳐보기 - 정답 */
{
class UserStorage {

    loginUser(id, pwd) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((id === 'ellie' && pwd === 'dream') || (id === 'coder' && pwd === 'academy')) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error('no access'));
                }
            }, 1000);
        })
    }

}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pwd = prompt('enter your password');

userStorage
    .loginUser(id, pwd)
    .then(userStorage.getRoles)                 
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);





/* async, await 이용해서 코드 고쳐보기 */
/* 
{
    userStorage
    .loginUser(id, pwd)
    .then(userStorage.getRoles)                 
    .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
    .catch(console.log);

}
    
*/


// 풀이
/*
{
    async function asyUser(id, pwd) {
        const user = await userStorage.loginUser(id, pwd);
        return `${user}`;
    }
    
    async function asyRole(user) {
        const userObj = await userStorage.getRoles(user); 
        return `${userObj.role}`;
    }
    
    asyUser(id, pwd)
        .then(asyRole)
        .then(role => alert(`Hello ${id}, you have a ${role} role`))
        .catch(console.log)
        
}
*/

}