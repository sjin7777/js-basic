'use strict';

/* 1. Function */
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 함수 선언 및 호출
function printHello() {
    console.log('hello');
}
printHello();


// 매개변수 넣은 함수 선언 및 호출
function log(message) {
    console.log(message);
}
log('hello~!@');




/* 2. Parameters */
// premitive parameters: passed by value
// (메모리에 value가 그대로 저장되어 있기 때문에 value가 전달됨)
// object parameters: passed by reference
// (메모리에 reference가 저장되기 때문에 reference가 전달됨)

// 전달된 obj의 이름을 'coder'로 무조건 변경하는 함수
function changeName(obj) {
    obj.name = 'coder';
}

// ellie라는 Object를 만들고 할당 
// => 메모리에는 Object가 만들어진 reference가 메모리에 들어가게 됨
// 그 reference는 Object를 메모리 어딘가에서 가리킴
const ellie = {name: 'ellie'};

// Object인 ellie가 가리키고 있는 name인 'ellie'를 'coder'로 변경
changeName(ellie);
console.log(ellie);




/* 3. Default parameter (added in ES6) */
function showMessage(message, from) {
    console.log(`${message} by ${from}`);
}

showMessage('hihi');    // hihi by undefined (from에 값을 할당해주지 않았기에 undefined로 나옴)


// 그렇기에 디폴트 값을 미리 지정해줌
function showMessageD(message, from='unknown') {
    console.log(`${message} by ${from}`);
}
showMessageD('hellllllllo');




/* 4. Rest parameters (added in ES6) */
function printAll1(...args) {
    for(let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
printAll1('dream', 'coding', 'ellie');

function printAll2(...args) {
    for(const arg of args) {
        console.log(arg);
    }
}
printAll2('dream', 'coding', 'ellie');


function printAll3(...args) {
    args.forEach((arg) => console.log(arg));
}
printAll3('dream', 'coding', 'ellie');



/* 5. Local Scope */
let globalMessage = 'global';       // global variable
function printMessage() {
    let message = 'hello';
    console.log(message);   // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // childMessage = 'hello';              // 에러
}
printMessage();


/* 6. Return a value */
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2);       // 3
console.log(`sum: ${sum(1, 2)}`);



/* 7. Early return, early exit */
// bad
function upgradeUser(user) {
    if(user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgaradeUser(user) {
    if(user.point <= 10) {
        return;
    }
    //long upgrade logic...
}











/* First-class function */
// functions are treated like any other variable
// can be assigned as a value to variable (변수에 할당)
// can be passed as an argument to other functions. (함수에 파라미터 전달)
// can be returned by another function (리턴값으로도 리턴됨)

// 1. function expression 
// a function declaration can be called earlier than it is defined (hoisted, 함수가 선언되기 전에 호출 가능)
// a function expression is created when the execution reaches it (할당된 다음부터 호출 가능)

// 함수를 선언함과 동시에 변수 print에 할당
// anonymous function: function의 이름은 없고, function의 키워드만 사용하여 파라미터와 블럭을 이용한 함수를 변수에 할당
const print = function() {
    console.log('print');
};
print();

const printAgain = print;
// 다른 변수에 할당하게 되어도 함수를 가리키기 때문에 함수를 호출하는 것처럼 부르면 print()가 출력됨
printAgain();

// named function: function의 이름이 있고 function의 키워드, 파라미터, 블록을 이용한 함수를 변수에 할당
const print2 = function print2() {

}


/* 2. Callback function using function expression */
// answer: 정답, printYes(): 정답일 경우 호출할 함수, printNo(): 오답일 경우의 호출할 함수
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function: 이름이 없는 function
const printYes = function() {
    console.log('yes');
}

// named function: 이름이 있는 function
// better debugging in debugger's stack traces
// recursions
// 1. 디버깅할때 함수이름이 나오게 하기 위함
// 2. 또는 함수 안에서 자신 스스로 호출하기 위함
const printNo = function print() {
    console.log('no');
    // print();
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);



/* 3. Arrow Function */
// always anonymous
const simplePrint1 = function() {
    console.log('simplePrint!');
}
// 한 줄일 경우 블럭 없이 작성 가능
const simplePrint2 = () => console.log('simplePrint!');

const add1 = function(a, b) {
    return a + b;
}
const add2 = (a, b) => a + b;

// 한 줄이 아닐 경우 블럭 사용해야 함(return 필요)
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}



/* 4. IIFE: Immediately Invoked Function Expression */
function hello() {
    console.log('IIFE');
}
hello();


// 선언함과 동시에 바로 호출 (함수)();
(function hello1() {
    console.log('IIFE2');
})();


/* Quiz. function calculate(command, a, b) 생성 */
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    let res = 0;
    switch(command) {
        case 'add':
            res = a + b;
            break;
        case 'substract':
            res = a - b;
            break;
        case 'multiply':
            res = a * b;
            break;
        case 'divide':
            res = a / b;
            break;
        case 'remainder':
            res = a % b;
            break;
    }
    return console.log(res);
}

calculate('add', 3, 4);
calculate('substract', 3, 4);
calculate('multiply', 3, 4);
calculate('divide', 3, 4);
calculate('remainder', 3, 4);