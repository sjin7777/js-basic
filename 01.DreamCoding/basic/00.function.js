'use strict';

/* 1. 함수 선언 & 호출 */
// 함수 선언
// function 키워드 + 함수명 + (전달받을 인자) + {실행할 코드}
{
    function doSomething() {
        console.log('hello');
    }

    // 함수 호출
    // 함수명 + (전달할 인자)
    doSomething();
}



/* 2. 값을 리턴하는 함수 */
{
    function add(a, b) {
        const sum = a + b;
        return sum;
    }

    const result = add(1, 2);
    console.log(result);
}



/* 3. 함수를 인자로 전달 */
{
    // add 함수 자체가 전달됨
    function doSomething(add) {
        console.log(add);
        // add()함수 호출 및 할당
        const result = add(5, 6);
        // 출력
        return console.log(result);
    }

    function add(a, b) {
        const sum = a + b;
        return sum;
    }

    
    // doSomething() 함수 호출 시 add의 인자를 넣고 전달하게 되면, 
    // add(3, 5)가 호출되고 난 뒤의 값이 전달되므로 함수를 전달한 것이 아님
    // doSomething(add(3, 5));


    // 그렇기에 함수를 전달하려면 인자에 함수 이름만 넣고 전달
    // 일부러 함수 이름만 전달함 (sum의 값이 아닌 함수 자체를 전달하기 위함)
    doSomething(add);


    // 결론
    // doSomething() 함수의 인자로 add() 함수의 함수명만 전달하고, 전달받은 add로 이용하거나 호출할 수 있음
}



/* 4. 선언 & 호출 복습 */
// 함수에는 선언과 호출이 있음
// 선언을 할 떄에는 어떤 값을 전달 받아올건지 인자들을 정의하고 나서 코드 블럭을 작성하게 됨
// 선언만 해놓으면 작성해놓은 코드 블럭은 수행되지 않는다
// 선언한 함수를 실행시키기 위해서는 함수를 호출해야 한다

// 함수를 호출하기 위해서는 '함수명 + (전달할 인자)' 를 이용해서 함수에서 정의된 인자값들을 전달하면서 호출해야 한다
// 함수의 이름 자체는 함수를 가리키는 함수 자체가 된다
// 그렇기에 호출 시 '()'를 사용하지 않고, 함수 이름만 다른 함수의 인자로 전달하거나, 다른 변수에 할당하게 되면 함수 자체를 가리키게 된다




/* 5. 함수를 변수에 할당 */
{
    function add(a, b) {
        const sum = a + b;
        return sum;
    }

    // 변수에 함수명만 할당하게 된다면, 함수 자체가 나옴
    // add가 addFun에 복제됨
    const addFun = add;
    console.log(addFun);

    // addFun으로 호출하여 출력하기
    console.log(addFun(7, 8));

}