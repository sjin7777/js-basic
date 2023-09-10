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





/* Promise 라는 Producer를 생성 */
/* 1. Producer */

// 원하는 기능을 비동기적으로 실행하는 promise를 생성
//  (Promise는 클래스이기 때문에 new라는 키워드를 이용해서 Object를 생성할 수 있음)
//  - resolve:  기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달하는 콜백함수
//  - reject:   기능을 수행하다가 중간에 문제가 생길 경우 호출하게 될 콜백함수

// Promise()를 생성하는 순간 executor 콜백함수가 바로 실행됨
// 즉, 이 Promise 안에 Network 통신을 하는 코드를 작성했다면, Promise가 만들어지는 순간, 바로 Network 수행을 하게 됨
const promise1 = new Promise((resolve, reject) => {
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



// 만약, Network 요청을 사용자가 요구했을 때만 해야하는 경우(사용자가 버튼을 눌렀을 경우)라면, 위처럼 작성하면 안 됨.
// promise를 만드는 순간 그 안에 전달한 executor 콜백함수가 바로 실행이 되기 때문에,
// 사용자가 요구하지도 않았는데도 불필요한 Network 통신을 할 수도 있기에 주의해야 함



/* when new Promise is created, the executor runs automatically. */
// (새로운 Promise가 만들어질 때는, 전달한 executor라는 함수가 자동(바로) 실행 됨)
const promise = new Promise((resolve, reject) => {
    // Network 통신을 하는 것처럼 setTimeout()을 이용해서 시간을 delay함

    // 해당 함수를 2000ms(2초) delay하고 실행
    setTimeout(() => {
        // 성공적으로 실행됐을때: resolve함수 호출
        // 성공적으로 Network에서 받아왔거나, file에서 읽어와서 가공한 데이터를 resolve()라는 콜백함수를 통해서 전달
        
        // data = 'ellie'
        resolve('ellie');
    }, 2000);
    
    
    // 해당 함수를 2000ms(2초) delay하고 실행
    setTimeout(() => {
        // reject()는 보통 Error Object(new Error())를 통해서 값을 전달함
        // new Error(): Error 클래스. js에서 제공하는 Object 중 하나로, 에러가 발생했음을 알리는 object
        //              보통 어떤 에러가 발생했는지 이유를 잘 명시하여 작성해야 함
        reject(new Error('no network'));
    }, 2000);
});






/* Promise를 사용하는 Consumers 생성  */
/* 2. Consumers: then, catch, finally */
// then, catch, finally를 이용해서 값을 받아올 수 있음

// then(): 값이 정상적으로 잘 수행이 된다면, value을 받아와서 원하는 기능을 수행하는 콜백함수를 전달해줌
//      여기서 value라는 parameter는 promise가 정상적으로 수행되어서 마지막으로 resolve() 콜백함수에서 전달된, 'ellie'라는 값이 들어옴
//      즉, promise가 정상적으로 수행되어서 최종적으로 resolve라는 콜백함수를 통해서 전달한 값이 파라미터인 value에 전달되어짐
//      - promise에 then()을 호출한다면, then()은 똑같은 promise를 리턴하기 때문에, 그 리턴된 promise의 catch를 다시 호출할 수 있음(chaining)
// catch(): 에러가 발생한다면, error를 받아와서 어떻게 처리할건지 콜백함수를 등록해주면 됨
// finally(): 성공여부와 상관없이 무조건 마지막에 호출되어짐. 아무런 인자를 받지 않음
//          성공여부와 상관없이 어떤 기능을 마지막으로 수행하고 싶을 때 사용
promise
    .then(value => {
        console.log(value);         // ellie
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

// promise object를 만들 때, 비동기적으로 수행하고 싶은 기능들의 코드들을 작성함
// 성공적으로 실행되었다면 resolve()를 호출하고, 실패했다면 실패한 이유를 담아서 에러인 reject()를 전달
// promise의 then과 catch를 이용해서 성공한 값 또는 실패한 에러를 받아와서 원하는 방식으로 처리해주면 됨







/* Promise 연결 */
/* 3. Promise chaining */
{
    // 서버에서 숫자를 받아오는 promise 생성
    // promise는 resolve와 reject인 콜백함수를 받는 executor라는 콜백함수를 전달해줘야 함
    const fetchNumber = new Promise((resolve, reject) => {
        // 서버통신을 위해 setTimeout 사용
        // 1000ms(1초) 뒤에 숫자 1를 resolve()를 통해 전달해주는 promise를 만들어줌 
        setTimeout(() => resolve(1), 1000);
    });
    
    
    // 여러가지를 동시에 묶어서 다른 비동기적인 것들을 처리할 수 있음
    fetchNumber
        // fetchNumber가 성공적으로 수행된다면, 그 value를 2배
        .then(num => num * 2)
        // fetchNumber가 성공적으로 수행된다면, 그 value를 3배
        .then(num => num * 3)
        // fetchNumber가 성공적으로 수행된다면, 그 value를 다른 서버에 보내서, 다른 숫자로 변환된 값을 받아옴
        // then은 값을 바로 전달할 수도 있고, promise를 전달할 수도 있음
        .then(num => {
            // 다른 서버와 통신을 하는 새로운 promise를 리턴
            return new Promise((resolve, reject) => {
                // 다시 setTImeout을 이용해서 value에 1을 뺀 값을 1초 뒤에 resolve()를 통해 전달
                setTimeout(() => resolve(num - 1), 1000);
            });
        })
        // 전달받은 숫자를 출력함
        .then(num => console.log(num));     // 2초뒤에 '5' 출력

}







/* 오류 처리 */
/* 4. Error Handling */
// Promise를 chaining 했을 때 어떻게 에러를 Handling 할 수 있는지 

// 총 3가지의 promise를 리턴하는 함수
{
    // 암탉 받아오기. 1초 후에 '암탉'을 리턴
    const getHen = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve('암닭'), 1000);
        });

    // 암탉을 받아서 1초 후에 달걀 얻기. 
    const getEgg = hen =>
        new Promise((resolve, reject) => {
            // 성공
            setTimeout(() => resolve(`${hen} => 계란`), 1000);
            // 실패
            setTimeout(() => reject(new Error(`Error! ${hen} => 계란`)), 1000);
        });

    // 달걀을 받아서 1초 후에 치킨 얻기
    const cook = egg =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(`${egg} => 치킨`), 1000);
        });



    // 첫번째 서버에서는 암탉 받아오기
    // 두번째 서버에서는 달걀 받아오기
    // 세번째 서버에서는 치킨 받아오기
    
    /* 1. */
    // 암탉 받기
    getHen()
        // 성공하면 (암탉을 받으면) 그 value(암탉)을 이용해서 getEgg()함수 호출하여 달걀 얻기
        .then(hen => getEgg(hen))
        // 성공하면 (달걀을 얻으면) 그 value(달걀)을 이용해서 getCook()함수 호출하여 요리하기
        .then(egg => cook(egg))
        // 성공하면 (요리가 완성되면) 그 value(요리)를 출력하기
        .then(meal => console.log(meal));       // 총 3초 후에 '암닭 => 계란 => 치킨' 출력됨


    /* 2. 1번을 더 깔끔하게 작성 */
    // 콜백함수를 전달할 때 받아오는 value를 바로 호출하는 경우 value 생략 가능
    // then에서 받아오는 value를 해당 함수에 바로 전달하여 호출해줌
    // 이렇게 1개의 값만 받아서 전달하는 경우에는 생략이 가능하므로 알아두기
    getHen()
        .then(getEgg)
        .then(cook)
        .then(console.log);


    /* 3. 달걀을 받아오다가 에러가 발생한 경우 */
    // 마지막에 catch()를 이용하여 에러처리
    getHen()
        .then(getEgg)
        .then(cook)
        .then(console.log)
        .catch(console.log);            // Error: Error! 암닭 => 계란 at 02.promise.js:171:37


    /* 4. 달걀을 받아오다가 에러가 발생했는데, 다른 걸로 대체하며 에러 처리하고 싶을 경우 */
    getHen()
        .then(getEgg)
        // 위 코드에서 발생하는 에러 처리를 이런 식으로 바로 밑에 catch를 사용하여 에러 처리
        .catch(error => {
            return '빵';
        })
        .then(cook)
        .then(console.log)
        .catch(console.log);            // 빵 => 치킨

}





