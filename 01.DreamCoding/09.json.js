'use strict';


/* JSON */
// - simplest data interchange format (데이터를 주고 받을 때 사용할 수 있는 가장 간단한 파일 포맷이다)
// - lightweight text-based structure (텍스트로 기반하였기에 가벼움)
// - easy to read (읽기 쉬움)
// - key-value pairs (key-value 형식)
// - used for serialization and transmission of data between the network the network connection
//   (보통 서버와 데이터를 주고 받을 때 주로 직렬화(serialization), 전송하기 위해 사용함)
// - independent programming language and platform (!프로그래밍 언어나 플랫폼에 상관없이 사용 가능!)


// 이를 중점으로 공부할 것
// 1. object를 어떻게 serialize(직렬화)하여 JSON 형태(string)로 변환할지
// 2. 직렬화된 JSON형태를 어떻게 deserialize해서 object로 다시 변환할지




// (JSON이라는 Object를 이용하면 간단하게 해결)

/* 1. Object to JSON */
// Object를 JSON으로 변환하는 방법
// JSON.stringify(obj)

// boolean 타입을 json으로 변환
let json = JSON.stringify(true);
console.log(json);              // true
console.log(typeof json);       // string

// 배열을 json으로 변환
json = JSON.stringify(['apple', 'banana']);
console.log(json);              // ["apple","banana"]
console.log(typeof json);       // string

// Object를 json으로 변환
const rabbit = {
    name: 'tory'
    , color: 'white'
    , size: null
    , birthDate: new Date()
    // , symbol: Symbol('id')
    , jump: () => {
        console.log(`${this.name} can jump!`);
    }
}

console.log(rabbit);                // {name: 'tory', color: 'white', size: null, birthDate: Fri Sep 08 2023 13:21:46 GMT+0900 (한국 표준시), symbol: Symbol(id), jump: ƒ}
console.log(typeof rabbit);         // object

json = JSON.stringify(rabbit);

// symbol, function는 object에 있는 데이터가 아니기 때문에 제외됨
console.log(json);                  // {"name":"tory","color":"white","size":null,"birthDate":"2023-09-08T04:21:46.042Z"}
console.log(typeof json);           // string


// Object에서 원하는 Property만 전달하여 json으로 변환 가능
// rabbit에서 name만 전달하여 json으로 변환
json = JSON.stringify(rabbit, ['name']);
console.log(json);                  // {"name":"tory"}

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);                  // {"name":"tory","color":"white"}


// 콜백함수 이용
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    
    // rabbit의 Object를 감싸고 있는 최상위의 값이 제일 먼저 전달되고, 그 다음부터 key와 value들이 전달 됨
    // key: , value: [object Object]
    // key: name, value: tory
    // key: color, value: white
    // key: size, value: null
    // key: birthDate, value: 2023-09-08T04:37:24.558Z
    // key: jump, value: () => {
    //     console.log(`${this.name} can jump!`);
    // }

    return value;
});



// 콜백함수 이용 예시
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    
    // rabbit의 Object를 감싸고 있는 최상위의 값이 제일 먼저 전달되고, 그 다음부터 key와 value들이 전달 됨
    // key: , value: [object Object]
    // key: name, value: tory
    // key: color, value: white
    // key: size, value: null
    // key: birthDate, value: 2023-09-08T04:37:24.558Z
    // key: jump, value: () => {
    //     console.log(`${this.name} can jump!`);
    // }

    return key === 'name' ? 'ellie' : value;    // key가 'name'일 경우 value를 'ellie'로 설정하고, 나머지 key는 기존 value대로 씀
});
console.log(json);
// {"name":"ellie","color":"white","size":null,"birthDate":"2023-09-08T05:00:11.432Z"}




console.clear();


/* 2. JSON to Object */
// JSON을 Object로 변환하는 방법
// JSON.parse(obj)

// Object인 rabbit을 json으로 변환
json = JSON.stringify(rabbit);
console.log(json);              // {"name":"tory","color":"white","size":null,"birthDate":"2023-09-08T05:03:01.444Z"}
console.log(typeof json);       // string


// 변환한 json을 다시 Object로 변환
let obj = JSON.parse(json);
console.log(obj);               // {name: 'tory', color: 'white', size: null, birthDate: '2023-09-08T05:03:01.444Z'}
console.log(typeof obj);        // object


// 기존 Object인 rabbit에는 jump() 함수가 있었음
rabbit.jump();          // can jump!

// 하지만 JSON(sting)으로 변환되었다가 다시 Object가 된 obj에는 jump() 함수가 없음
// JSON으로 변환될 때 이미 포함되지 않았음(변환할 때 데이터만 포함함!)
// obj.jump();             // 에러. Uncaught TypeError: obj.jump is not a function




// 기존 Object인 rabbit에는 타입이 Date인 birthDate가 있었음
// 그렇기에 getDate()라는 Date의 API를 사용할 수 있었음
console.log(rabbit.birthDate.getDate());            // 현재 날짜 - 일 

// JSON에서 변환한 obj에서 이 API를 사용하게 된다면 에러 남
// console.log(obj.birthDate.getDate());               // 에러. Uncaught TypeError: obj.birthDate.getDate is not a function

// obj.birthDate는 Date 타입이 아닌 string 타입이기 때문에 getDate() API를 사용할 수 없음
console.log(obj.birthDate);         // 2023-09-08T05:14:45.383Z
console.log(typeof obj.birthDate);          // string


// 콜백함수 이용하여 obj에서도 Date 타입의 API 이용하는 방법
console.log(obj)        // {name: 'tory', color: 'white', size: null, birthDate: '2023-09-08T05:35:03.907Z'}
obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);       // {name: 'tory', color: 'white', size: null, birthDate: Fri Sep 08 2023 14:35:03 GMT+0900 (한국 표준시)
console.log(obj.birthDate.getDate());           // 에러 안 남. 현재 날짜의 - 일









/* 참고! JSON 관련 사이트 */
// http://www.jsondiff.com/                                 - 디버깅할 때 유용 (데이터들 비교하여 어떤게 다른지 알려줌)
// https://jsonbeautifier.org/                              - 망가진 포맷 재구성
// https://jsonparser.org/                                  - JSON 형태를 Object 형태로 확인
// https://tools.learningcontainer.com/json-validator/      - 코드에 이상이 있는지 확인
