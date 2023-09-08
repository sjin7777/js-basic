'use strict';



/* 5.0 Intervals */
// interval: '매번' 일어나야 하는 무언가

// const clock = document.querySelector("h2#clock");
const clock = document.querySelector("#clock");


/*
setInterval(arg1, arg2) 사용(함수를 계속 사용)
    arg1: 실행하고자 하는 function
    arg2: 호출되는 function의 간격을 몇 ms(milliseconds)로 할지 작성 (1초 = 1000ms)
*/

function sayHello() {
    console.log('hello');
}
// 해당 함수를 매 2초마다 실행하게 하기
// setInterval(sayHello, 2000);





/* 5.1 Timeouts and Dates */

/*
setTimeout(arg1, arg2) 사용(함수를 1번만 사용)
    arg1: 실행하고자 하는 function
    arg2: 몇 ms(milliseconds) 후에 function을 실행할지 작성 (1초 = 1000ms) 
*/

// 해당 함수를 3초 후에 실행하게 하기
// setTimeout(sayHello, 3000);

// 현재 날짜와 시간
const date = new Date();

/* 
console.log(date.getFullYear());    // 년
console.log(date.getMonth());       // 월
console.log(date.getDate());        // 일
console.log(date.getDay());         // 요일 (0~6, 0: 일요일)
console.log(date.getHours());       // 시간
console.log(date.getMinutes());     // 분
console.log(date.getSeconds());     // 초
 */


function getClock1() {
    const date = new Date();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// websit가 load되자마자 함수 실행하게 함
// getClock1();

// 함수를 1000ms(1초)마다 실행하게 함
// setInterval(getClock1, 1000);        



// 그런데 시분초가 한자리일경우 앞에 0을 붙여서 두자리로 만들고 싶음





/* 5.2 - padStart */
// string.padStart(arg1, arg2): string에 쓸 수 있는 function
    // arg1: 길이
    // arg2: string의 길이가 arg1가 아니라면 앞에 arg2을 추가함
    
    // "1"의 길이가 2가 아니므로 "1" 앞에 "0"을 추가함
console.log("1".padStart(2, "0"));               // 01
console.log("12".padStart(2, "0"));              // 12

// 이 string의 길이가 적어도 20이 되어야 함. 만족하지 않는 경우 string 앞에 "x"로 채우기
console.log("hello".padStart(20, "x"));         // xxxxxxxxxxxxxxxhello


// 참고로 string.padEnd(arg1, arg2)도 있음. 이건 뒤쪽에 문자를 추가해주는 함수임
console.log("1".padEnd(2, "0"));                // 10


function getClock() {
    const date = new Date();
    // hours, minutes, seconds는 string이 아닌 number이기 때문에 .padStart(2,"0")를 사용할 수 없음
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();

    // number를 String으로 변환 후 .padStart(2, "0") 사용
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// websit가 load되자마자 함수 실행하게 함
getClock();

// 함수를 1000ms(1초)마다 실행하게 함
setInterval(getClock, 1000);        





/* 5.3 - Recap */

/* 

1. getClock() 함수 생성 
2. getClock() 함수 안에 Date object 새로 생성
3. getClock() 함수로 인해 현재 날짜와 시간을 알 수 있음
4. 시,분,초는 number타입이기에 string 타입으로 변환 (String으로 감싸면 됨)
5. string 타입으로 변환했으니 padStart(arg1, arg2) 함수를 사용 (string의 길이가 arg1 길이에 도달하지 않을 경우 string 앞에 arg2로 채움)
6. 구한 시간을 clock의 innerText로 넣어줌
7. website가 load되자마자 시간이 보일 수 있도록 함수 바로 호출
8. setInterval(arg1, arg2)를 이용하여 arg2ms 마다 arg1 함수가 실행할 수 있도록 함 (1초마다 시간을 바꾸어 보여줌)

*/

