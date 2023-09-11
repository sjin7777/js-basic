'use strict';


/* 1. 함수 정의 */
// function 키워드 + 함수명 + (받을 인자1, 받을 인자2, ...) + { 실행할 기능 }

function 함수명 (인자1, 인자2) {
    return 인자1 + 인자2;
}

function 인자없는함수() {
    return console.log('js~');
}


/* 2. 함수 호출 */
// 함수명 + (전달할 인자1, 전달할 인자2, ...);
인자없는함수();
console.log(함수명(1, 2));



// 함수를 정의할 때, 정의한 코드블럭이 메모리에 생성됨
// 함수명은 코드블럭이 작성된 곳을 가리키므로 함수명의 값은 ref임
// (함수는 object이기 때문)
function add(num1, num2) {
    return num1 + num2;
}


// 상수 doSomething에 함수인 add를 할당하게 되면
// add가 가리키고 있는 코드블럭의 주소값이 복사되어 doSomething에 받아짐
const doSomething = add;

const result1 = doSomething(2, 3);      // 5
console.log(result1);

const result2 = add(2, 3);      // 5
console.log(result2);





// 즉, 함수명은 함수 자체(코드블럭)를 가리키고, 그 가리키는 주소값을 가지고 있다
// 함수를 호출하기 위해서는 ()를 이용하고, 전달할 데이터가 있다면 데이터를 ()안에 넣어서 전달한다

{
    // 이 함수는 인자로 operator 함수를 받아옴
    function surprise(operator) {
        // 받아온 operater 인자를 실행하고, result에 할당 후 출력
        const result = operator();
        console.log(result);
    }

    // operator는 아무런 값을 전달하지 않았기 때문에 undefind로 되어있음
    // surprise();         // Uncaught TypeError: operator is not a function


    // 인자로 add 함수를 전달하여 surprise 함수 호출
    // add가 가리키고 있는 주소값을 전달하는 것
    // add를 수행하는 것과 동일함
    // add함수의 인자값인 num1, num2에 아무런 값이 없기 때문에 NaN으로 뜸
    surprise(add);          // NaN
}

{

    function surprise(operator) {
        // 인자값 전달하여 result에 할당한 경우
        const result = operator(6, 19);     // add(6, 19)를 호출한 것과 같음
        console.log(result);
    }

    
    function divide(num1, num2) {
        return num1 / num2;
    }
    
    surprise(add);      // 25
    surprise(divide);       // 0.3157894736842105
}

// 함수명을 변수에 할당하거나, 다른 함수의 인자로 전달한다는 것은 이 함수명이 가리키고 있는 함수자체(코드블럭)의 주소값을 전달하는 것과 동일함
// 그래서 함수명만으로 함수를 호출할 수 있음