'use strict';


/* Promise is JavaScript object for asynchronous asynchronous operation */
// promise는 js안에 내장되어 있는 object로, 비동기적인 것을 수행할 때, 콜백함수 대신 유용하게 사용할 수 있는 object

// Promise의 포인트

// 1. state: promise의 상태는 promise가 만들어진 이후
//  - 지정한 operation을 수행 중일 때는 pending 상태가 됨
//  - operation을 성공적으로 끝내게 되면 fulfilled 상태가 됨 (완전히 완료)
//  - file을 찾을 수 없거나, network에 문제가 생긴다면 rejected 상태가 됨
//  (프로세스가 무거운 operation을 수행하고 있는 중인지, 아니면 기능 수행이 완료가 되어서 성공/실패했는지에 대한 상태에 대해 이해하고 있어야 함)

// 2. producer 와 consumer의 차이점을 알고 있어야 함
//  Promise의 object 
//      - Producer (원하는 기능을 수행해서 해당하는 데이터를 만들어냄)
//      - Consumer (원하는 데이터를 소비함)



/* 1. Producer */
// when new Promise is created, the executor runs automatically.
// (새로운 Promise가 만들어질 때는, 전달한 executor라는 함수가 자동 실행 됨)

// 1. 원하는 기능을 비동기적으로 실행하는 promise를 생성
//  (Promise는 클래스이기 때문에 new라는 키워드를 이용해서 Object를 생성할 수 있음)
//  - resolve:  기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달하는 콜백함수
//  - reject:   기능을 수행하다가 중간에 문제가 생길 경우 호출하게 될 콜백함수
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    // 이유: 네트워크에서 데이터를 받아오거나, 파일의 큰 데이터를 읽어오는 과정은  
    //      동기적으로 처리하면 시간이 좀 걸림
    //      그렇기에 그러한 경우에는 promise를 만들어서 비동기적으로 처리하는 것이 좋음 
    //      (즉 네트워크 통신, 파일 읽어오기들은 다 비동기적으로 처리)


    console.log('doing something...');

    // setTimeout(() => {
    //     resolve('ellie');
    // }, 2000);


    // setTimeout(() => {
    //     reject(new Error('no network'));
    // }, 2000);
});


/* 2. Consumers: then, catch, finally */
promise
    .then(value => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });







/* 3. Promise chaining */
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));







/* 4. Error Handling */
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 계란`), 1000);
        setTimeout(() => reject(new Error(`Error! ${hen} => 계란`)), 1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 치킨`), 1000);
    });


// getHen()
//     .then(hen => getEgg(hen))
//     .then(egg => cook(egg))
//     .then(meal => console.log(meal));

// getHen()
//     .then(getEgg)
//     .then(cook)
//     .then(console.log);



// getHen()
//     .then(getEgg)
//     .then(cook)
//     .then(console.log)
//     .catch(console.log);


getHen()
    .then(getEgg)
    .catch(error => {
        return '빵';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);

