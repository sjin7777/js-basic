'use strict';

/* async & await */
// clear style of using promise (깔끔하게 promise를 사용할 수 있는 방법)


/* 1. async */
function fetchUser() {
    // do network request in 10 secs........
    // return 'ellie';

    // return new Promise((resolve, reject) => {
    //     return 'ellie';
    // });

    return new Promise((resolve, reject) => {
        resolve('ellie');
    });
}

const user = fetchUser();
user.then(console.log);
console.log(user);



// async function fetchUser() {
//     return 'ellie';
// }






/* 2. await */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '사과';
}

// async function getApple() {
//     await delay(1000);
//     throw 'error';      // 에러 발생시키기
//     return '사과';
// }



// 동기적인 코드를 만드는 것처럼 
async function getBanana() {
    await delay(1000);
    return '바나나';
}


// promise를 사용하는 동일한 함수로 만들어보자면 이런 식으로 할 수 있는데
// 이렇게 channing을 하는 것보다 위 코드처럼 동기적인 코드를 쓰는 것처럼 만드는게 더 좋음

function getBanana() {
    return delay(3000)
        .then(() => '바나나');
}


// 모든 과일 받아오기


// 콜백지옥의 경우
// function pickFruits() {
//     return getApple().then(apple => {
//             return getBanana().then(banana => `${apple} + ${banana}`)
//         })
// }

// async를 이용하여 변경하기
async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}


// 에러처리 해보기
// async function pickFruits() {
//     try {
//         const apple = await getApple();
//         const banana = await getBanana();
//     } catch(error) {
//         console.log(error);
//     }
//     return `${apple} + ${banana}`;
// }


// await 병렬 처리
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);




/* 3. useful Promise APIs */
// API를 이용하여 더 간편하게 짜보기
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
                .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);


async function getMelon() {
    await delay(1000);
    return '메론';
}

async function getOrange() {
    await delay(1000);
    return '오렌지';
}

function pickOnlyOne() {
    return Promise.race([getMelon(), getOrange()])
}

pickOnlyOne().then(console.log);


