'use strict';


/* 1. 변수 */
// 변수: 프로그래밍 언어에서 처리해야하는 데이터를 담는 곳
//      - 변수를 이용하여 데이터에 접근하거나 업데이트 할 수 있음
//      - 변수 생성: let, const 키워드 사용
// let: 값 변경 가능
// const: 값 변경 불가능(상수이기 때문)






/* 2. 변수 타입 */
// 2-1. primitive type (가장 작은 데이터 단위의 타입): number, string, boolean, null, undefined, symbol

// number에 2 할당
let number = 2;
//      - 변수 number를 선언함과 동시에 메모리에 변수 number를 위한 공간이 생성되고, 변수 number에 할당된 값이 그 공간에 값에 적재됨
//      (변수안에 그 값이 들어감)


// number2에 number를 할당
let number2 = number;
//      - 다시 변수 number2를 선언했기 때문에 또 다른 공간에 변수 number2를 위한 공간이 생성됨
//      (변수를 선언하면 무조건! 그 변수를 위한 공간이 생김. 메모리 안에 어느정도의 바이트 사이즈의 데이터 공간이 확보됨)
//      - 변수 number에 들어있는 값을 변수 number2가 그대로 복사하여 값을 할당하게 됨


// 출력
console.log(number);        // 2
console.log(number2);       // 2
//      - 그렇기에 같은 값이 출력됨


// number2의 값을 3으로 업데이트
number2 = 3;
//      - 변수 number2에 있는 메모리 공간에 숫자 2 대신 3을 업데이트함 (이제 변수 number2 공간에는 3이 들어있음)


// 출력
console.log(number);        // 2
console.log(number2);       // 3
//      - 변수 number의 값이 복사되어 변수 number2의 값으로 들어갔기 때문에, 
//      변수 number2의 값을 변경하더래도 변수 number에는 영향이 전혀 가지 않음





// 2-2. object (key: value)
//      - primitive type를 제외한 모든 타입(array, list, function, ...)
//      - object는 최소한 한두가지의 다양한 데이터를 한군데에 묶어놓은 것
//      - object는 적어도 한두가지 이상의 큰 데이터가 들어가있기 때문에 단순히 변수를 선언하는 곳에 다 담을 수 없음(너무 크기 때문)


// Object인 obj의 name이라는 key에는 'ellie'라는 value가 들어있고, age라는 key에는 5라는 value가 들어있음
let obj = {
    name: 'ellie',
    age: 5,
}
//      - obj라는 새로운 변수의 공간이 생김
//      - 메모리에는 각각의 key에 해당하는 메모리가 할당 됨
//      (name이라는 공간에 'ellie'라는 value가 들어가있고, age라는 공간에 5라는 value가 들어가있음)
//      - 그 name과 age를 묶은 주소의 값인 ref가 있음
//      - obj의 변수에는 그 주소의 값인 ref이 들어가있음 
//      - object는 변수 한 공간에 들어가있기에 너무 크기 때문에, 각각의 key마다 공간이 따로 할당되어져 있고, 이 key와 공간을 묶은 주소값만을 할당함


// object의 key(변수)를 이용하여 접근
obj.name;
//      - obj의 주소값이 가리키는 name이라는 key(변수)의 값인 'ellie'에 접근한 것


// 출력
console.log(obj.name);      // ellie


// 변수 obj2를 생성하면서 값에 obj를 할당
let obj2 = obj;
//      - obj처럼 똑같이 변수를 선언했으므로 obj2라는 새로운 변수의 공간이 생기고 obj를 할당하게 되는데,
//      obj에는 무언가를 가리키는 주소가 들어있음 
//      - 변수를 할당할 때는 무조건 변수에 들어있는 값이 복사되어 들어오기 때문에,
//      즉, obj가 들어있는 주소값이 복사되어 obj2 값에 들어가게 됨


// obj2의 name 접근
console.log(obj2.name);     // ellie
//      - obj안에 들어있는 주소값을 이용해서 그 주소가 가리키고 있는 key가 name의 값을 출력함


// obj의 name에 'james'로 할당 및 출력
obj.name = 'james';
console.log(obj.name);      // james
console.log(obj2.name);     // james
//      - obj의 주소가 가리키고 있는 key인 name의 값을 'james'로 할당하였기 때문에,
//      동일한 주소값을 가지고 있는 obj2의 key인 name도 'james'가 됨
//      - 즉, obj나 obj2나 가리키는 object(주소값)가 같기 때문에, 어떤 obj를 이용하여 값을 변경하더래도 둘 다 변경이 됨








/* 정리 */
/* 
    변수를 선언하면 데이터를 담을 수 있는 공간이 할당되고 선언한 변수가 그 할당된 공간을 가리킴
    primitive type의 경우에는 데이터가 작은 단위이기 때문에, 데이터가 메모리에 그대로 들어오지만, 
    object처럼 무거운 단위들은 데이터가 메모리에 그대로 들어올 수 없음
    그 object가 가리키는 object2들은 따로 할당이 되어있고, 그 object2를 가리키고 있는 주소가 있는데, 이를 ref라고 하고,
    object에는 ref가 들어가게 됨

    변수를 다른 변수에 할당하거나 전달할 때, 변수안에 있는 값이 복사되어서 가기 때문에
    primitive type의 경우에는 값 자체가 들어있으므로 값 자체가 복사되어 전달이 되지만, 
    object의 경우에는 ref가 복사되어 전달됨
    그렇기 때문에 object를 통해서 데이터를 변경하게 된다면, ref가 가리키는 object2가 변경됨

    object를 const로 선언한 후의 값 변경
    object의 값은 ref이기에 ref의 값을 변경하는건 불가능하지만,
    ref가 가리키는 object2의 key 값들을 변경하는건 가능함
 */