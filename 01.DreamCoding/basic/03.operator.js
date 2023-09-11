'use strict';


// true: [] (배열은 object이기 때문에, 무언가 데이터가 있다면 다 true), 'false'(''로 감싸져있으므로 문자열)
// false: 0, -0, ''. null, undefined, NaN, 값이 할당되어있지 않은 변수(undefined)
let num0;        // undefined

if(true){
    console.log('true!!!!!!');
} else {
    console.log('false!!!!!!');
}

let num = 5;

/* num이 true일 경우 실행 */
// 방법 1
if(num) {
    console.log('true~@@');
}

// 방법 2
num && console.log('true~***');


/* obj가 true일 경우 실행 */
// obj 값이 있을 경우에만 실행되도록 함
let obj;        // false

// 방법 1
if(obj) {
    console.log(obj.name);
}

// 방법 2
obj && console.log(obj.name);