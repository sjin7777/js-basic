'use strict';

/* async & await */
// promise를 좀 더 간결하고, 간편하며 동기적으로 실행되는것처럼 보이게 함
// clear style of using promise (깔끔하게 promise를 사용할 수 있는 방법)


/* 1. async */

// 1-1. 동기적으로 처리
{
    // 사용자의 데이터를 백엔드에서 받아오는 함수
    function fetchUser() {
        // do network request in 10 secs........
        // 예시. 네트워크 통신으로 백엔드에서 데이터를 받아오는 시간이 10초가 걸림

        // 10초가 지나면 user의 데이터를 받아서 리턴함
        return 'ellie';
    }

    // 바로 호출하고 출력
    const user = fetchUser();
    console.log(user);

}
// JS엔진은 동기적으로 코드를 수행하게 되는데, 
// 이렇게 데이터를 받기까지 오래 걸리는 코드를 비동기적인 처리를 전혀 하지 않을 경우에는
// 데이터를 받기까지 그 다음코드들이 수행되지 않음 (데이터가 웹 페이지에 표시되지 않음)
// 이런 식으로 오래 걸리는 코드들은 비동기적인 처리를 해야 함



// 1-2. promise로 처리
// promise는 언제 데이터를 받아올지는 모르겠지만, 
// promise의 object를 가지게 되고, then()이라는 콜백함수만 등록해놓는다면, 데이터가 준비되는대로 등록한 콜백함수를 부름
// Promise((resolve, reject): Promise 안에는 resolve, reject라는 각각의 콜백함수를 받는, executor라는 콜백함수를 만듦
// 그렇기에 그 안에 있는 코드블럭이 비동기적으로 수행됨
{
    function fetchUser() {

        // resolve나 reject를 호출하지 않고, 데이터만 리턴하는 경우
        // Promise {<pending>}
        // : Promise가 pending 상태가 됨 (결과값도 없는 상태)
        // return new Promise((resolve, reject) => {
        //     return 'ellie';
        // });

        // resolve를 호출하는 경우
        // Promise {<fulfilled>: 'ellie'}
        return new Promise((resolve, reject) => {
            resolve('ellie');
        });

        // resolve를 호출하는 경우
        // Promise {<rejected>: 'ellie'}
        // return new Promise((resolve, reject) => {
        //     reject('ellie');
        // });
    }

    
    // 즉, fetchUser()는 결국은 promise를 리턴하기 때문에, then()이라는 콜백함수를 이용 가능
    const user = fetchUser();
    user.then(console.log);
    console.log(user);
}





// 1-3. Promise를 사용하지 않고, 더 간편하게 비동기로 처리하는 방법      => async
// 함수 앞에 async 키워드 붙여주기
// async 키워드를 붙여주면, 자동으로 함수 블럭들이 promise로 변환되어짐
{
    async function fetchUser() {
        return 'ellie';
    }

    const user = fetchUser();
    user.then(console.log);     
    console.log(user);              // Promise {<fulfilled>: 'ellie'}
}








/* 2. await */
// awit는 async 키워드가 붙어있는 함수에서만 사용 가능
// await 키워드가 있으면 그 뒤에 있는 함수를 끝날때까지 기다려줌

// 정해진 ms가 지나면, resolve를 호출하는 promise를 리턴하는 함수
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// 1초가 지나면 '사과'를 리턴하는 함수
async function getApple() {
    await delay(1000);
    return '사과';
}


// 동기적인 코드를 만드는 것처럼 만든 비동기적인 함수
// 1초가 지나면 '바나나'를 리턴하는 함수
async function getBanana() {
    await delay(1000);
    return '바나나';
}


// promise를 사용하는 동일한 함수로 만들어보자면 이런 식으로 할 수 있는데
// 이렇게 channing을 하는 것보다 위 코드처럼 동기적인 코드를 쓰는 것처럼 만드는게 더 좋음
// function getBanana() {
//     return delay(1000)
//         .then(() => '바나나');
// }












/* 3. 모든 과일 받아오기 */
// 3-1. promise chanining의 경우 
{
    function pickFruits() {
        return getApple().then(apple => {
                return getBanana().then(banana => `${apple} + ${banana}`)
            })
    }

    pickFruits().then(console.log);         // 사과 + 바나나
}


// 3-2. async를 이용하여 변경하기
{
    async function pickFruits() {
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`;
    }

    pickFruits().then(console.log);         // 사과 + 바나나
}






/* 4. 에러 처리 */
// async function getTomato() {
//     await delay(1000);
//     throw 'tomato error';      // 에러 발생시키기
//     return '토마토';
// }


// 에러처리 해보기      => 틀림
// async function pickFruitsError() {
//     try {
//         const tomato = await getTomato();
//         return tomato;
//     } catch(error) {
//         console.log(error);
//     } 
// }
// pickFruitsError().then(console.log); 







/* 5. await 병렬 처리 */
// 사과 1초, 바나나 1초 걸리므로 총 2초가 걸림
// 이렇게 순차적으로 진행하게 되면 비효율적임
// 사과와 바나나는 서로 연관이 없기 때문에 기다릴 필요 없음
{
    async function pickFruits() {
        const apple = await getApple();
        const banana = await getBanana();
        return `${apple} + ${banana}`;
    }

    pickFruits().then(console.log);         // 사과 + 바나나
}

// 위 코드 수정하기
// 총 1초 걸림
{
    async function pickFruits() {
        // 사과의 promise 생성. promise 안에 있는 코드 블럭이 바로 실행됨
        const applePromise = getApple();
        // 바나나의 promise 생성. promise 안에 있는 코드 블럭이 실행됨
        const bananaPromise = getBanana();

        // applePromise와 bananaPromise를 만들었기 때문에, 만들자마자 getApple()와 getBanana() 함수가 바로 실행됨 
        // (병렬적으로 동시에 실행)
        const apple = await applePromise;
        const banana = await bananaPromise;
        return `${apple} + ${banana}`;
    }

    pickFruits().then(console.log);
}






/* 6. useful Promise APIs */
// Promise에서 제공하는 API 이용하여 더 간편하게 짜보기
{
    async function getMelon() {
        await delay(1000);
        return '메론';
    }
    
    async function getOrange() {
        await delay(2000);
        return '오렌지';
    }
    
    
    // all(): Promise 배열을 전달하게 되면, 모든 Promise들이 병렬적으로 다 받을 때까지 모아줌
    function pickAllFruits() {
        return Promise.all([getMelon(), getOrange()])
                    // 배열에 있는 promise들이 다 받아진다면 수행
                    // 다 받아진 배열이 전달되고, 배열을 string으로 묶기 위해 join() 사용
                    .then(fruits => fruits.join(' + '));
    }
    // pickAllFruits()이 성공적으로 받아진다면 수행
    pickAllFruits().then(console.log);
    
    
    // race(): Promise 배열을 전달하게 되면, 어떤 것이든 상관없이 가장 먼저 받아진 Promise를 전달해줌
    function pickOnlyOne() {
        // 배열에 전달된 promise 중 가장 먼저 값을 리턴하는 것을 전달
        return Promise.race([getMelon(), getOrange()])
    }
    
    pickOnlyOne().then(console.log);
}

