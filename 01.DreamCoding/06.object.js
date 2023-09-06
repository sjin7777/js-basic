'use strict';

/* Objects */
// one of the JavaScript's data types
// a collection of related data and / or functionality
// Nearly all objects in JavaScript ar instance of Object

/* 1. Literals and properties */

// Object = { key : value } 
// Object는 Key와 Value의 집합체
// key는 우리가 접근할 수 있는 property(변수)
// value는 그 property(변수)가 가지고 있는 값

// bad
const name = 'ellie';
const age = 4;
function print(name, age) {
    console.log(name);
    console.log(age);
}
print(name, age);

// good
function printPerson(person) {
    console.log(person.name);
    console.log(person.age);
}
const ellie = { name: 'ellie', age: 4 };
printPerson(ellie);



// Object 생성 방법
// 1. {}
//   : 'object literal' syntax
const obj1 = {};
// 2. new 키워드 + 클래스를 이용 (클래스에 정의된 constructor(생성자)가 호출됨 )
//   : 'object constructor' syntax 
const obj2 = new Object();

// Js는 동적으로 타입이 Runtime일 때(프로그램이 동작하고 있을 때) 결정되는 언어
// 그렇기에 Object 생성 후에 property를 추가할 수 있음
ellie.hasJob = true;
console.log(ellie.hasJob);          // true
console.log(ellie);

// property 삭제도 가능
delete ellie.hasJob;
console.log(ellie.hasJob);          // undefined
console.log(ellie)




/* 2. Computed properties */
// key should be always string
// Object 접근 방법
console.log(ellie.name);
console.log(ellie['name']);         // Object[Object안에 있는 String 형태의 변수명]

// Object에 Property 추가
console.log(ellie);     // {name: 'ellie', age: 4}
ellie['hasJob'] = true;
console.log(ellie);     // {name: 'ellie', age: 4, hasJob: true}

// 2-1. Object.property 방식
//      : 대부분 코딩할 때 사용. 이 property(key)에 해당하는 값을 받아오고 싶을 경우

// 2-2. Object['property'] 방식
//      : 정확하게 어떤 property(key)가 필요한지 모를 경우. 즉 runtime에서 결정될 때 사용
// 동적으로 key에 관련된 value를 받아와야 할 때 유용하게 사용 가능

// 예시> Object와 Key를 받아서 그 Object에 있는 Key에 상응하는 value값을 반환해주는 함수 
function printValue1(obj, key) {
    console.log(obj.key);
}
printValue1(ellie, 'name');         // undefined
printValue1(ellie, 'age');          // undefined


function printValue2(obj, key) {
    console.log(obj[key]);
}
printValue2(ellie, 'name');         // ellie
printValue2(ellie, 'age');          // 4







/* 3. Property value shorthand */
const person1 = { name: 'bob',  age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };

// Object를 생성하는 함수
function makePerson(name, age) {
    return {name, age}
};

const person4 = makePerson('kim', 5);
console.log(person4);



// Object를 생성하는 함수 더 업그레이드
/* 4. Constuctor Function */
function Person(name, age) {
    // this = {};           // 생략. 새로운 Object를 만듦
    this.name = name;
    this.age = age;
    // return this;         // 생략. this에 name과 age를 넣고 this를 리턴
}
// new 키워드 사용하여 함수 이용할 것
const person5 = new Person('so', 9);
console.log(person5);




/* 5. in operator: property existence check (key in obj) */
// 해당 obj에 key가 존재하는지 확인
console.log('name' in ellie);           // true
console.log('age' in ellie);            // true
console.log('random' in ellie);         // false
console.log(ellie.random);              // undefined. 정의하지 않은 값 출력시 나옴   


console.clear();    // 이전 콘솔로그 지우기

/* 6. for..in  vs  for..of */
// 6-1. for(key in obj) : obj 안에 있는 key를 가져옴

// 영상에서는 key 선언 안 했는데도 출력되는데 나는 선언해야 출력됨....
// for(key in ellie) {
//     console.log(key);
// }

for(let key in ellie) {
    console.log(key);
}


// 6-2. for(value of iterable) : Object 사용X, 배열과 같은 리스트를 사용. iterable에 있는 값들이 value에 모두 할당
const array = [1, 2, 4, 5];

// 그냥 for문
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// for..of문
// 영상에서는 value 선언 안 했는데도 출력되는데 나는 선언해야 출력됨....
// for(value of array) {
//     console.log(value);
// }
for(let value of array) {
    console.log(value);
}




/* 7. Fun cloning */
// Object.assign(dest, [obj1, obj2, obj3, ...])

// user1이 가리키고 있는 메모리는 name이 'ellie'고 age가 '20'인 Object를 가리킴
const user1 = { name: 'ellie', age: '20' };
// user2는 user1으로 할당되었기에, user1이 가리키고 있는 메모리의 Object를 가리킴
const user2 = user1;
// user2가 가리키고 있는 메모리의 Object에 있는 name을 'coder'로 변경
user2.name = 'coder';
console.log(user1);         // coder


/* Object 복제 방법 */
// old way 
// 1. 빈 Object를 만듦 
const user3 = {};
// 2. 수동적으로 할당
for (let key in user1) {
    user3[key] = user1[key];
}
console.log(user3);


// new way
// Object.assign() 사용
// 1. 빈 Object를 만듦 
const user4 = {};
// 2. Object.assign(붙여넣을obj, 복사할obj);
Object.assign(user4, user1);
console.log(user4);

// 또는 바로 넣기
const user5 = Object.assign({}, user1);
console.log(user5);



// another example
// Object.assign() 사용하여 여러개 전달하기
// 뒤에 있는 obj가 앞에 있는 것을 덮어씌우기 때문에 뒤에 있는 값으로 함
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);       // blue
console.log(mixed.size);        // big
