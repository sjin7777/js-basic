'use strict';


/* 1. Array Declaration */
// 배열 선언 방법 1
const arr1 = new Array();
// 배열 선언 방법 2
const arr2 = [];






/* 2. Index position */
// 인덱스를 이용한 배열의 접근
const fruits = ['사과', '바나나'];
console.log(fruits);                // ['사과', '바나나']
console.log(fruits.length);         // 2

// '사과' 출력하기
console.log(fruits[0]);                     // 사과
// 인덱스 범위 밖에 있는 것에 접근 한다면 undefined
console.log(fruits[999]);                   // undefined
// 배열의 마지막에 있는 것을 출력하고자 할 경우의 인덱스 = 총 길이 - 1
console.log(fruits[fruits.length-1]);       //바나나






/* 3. Looping over an array */
// for문
for(let i = 0; i < fruits.length; i++) {
    console.log('1 >> ', fruits[i]);
}

// for .. of 
for(let fruit of fruits) {
    console.log('2 >> ', fruit);
}

// forEach
fruits.forEach((fruit) => console.log('3 >> ',fruit));
// index까지 출력
fruits.forEach((fruit, index) => console.log('4 >> ',fruit, index));








/* 4. Addtion, deletion, copy */
// push: add an item to the end (배열 맨 뒤에 추가)
fruits.push('딸기', '복숭아', '수박', '파인애플', '귤', '한라봉');
console.log(fruits);                 // ['사과', '바나나', '딸기', '복숭아', '수박', '파인애플', '귤', '한라봉']

// pop: remove an item from the end (배열 맨 뒤에 있는 것 삭제)
fruits.pop();
console.log(fruits);                // ['사과', '바나나', '딸기', '복숭아', '수박', '파인애플', '귤']


// unshift: add an item to the benigging (배열 맨 앞에 추가)
fruits.unshift('레몬', '메론');        
console.log(fruits);                             // ['레몬', '메론', '사과', '바나나', '딸기', '복숭아', '수박', '파인애플', '귤']

// shift: remove an item from the benigging (배열 맨 앞에 있는 것 삭제)
fruits.shift();
console.log(fruits);                             // ['메론', '사과', '바나나', '딸기', '복숭아', '수박', '파인애플', '귤']


// 참고. shift, unshift are slower than pop, push(shift와 unshift는 pop과 push보다 매우 느림)
// 그렇기에 웬만하면 unshift/shift보다는 push/pop을 사용하기를 권장


// splice: remove an item by index position
// 지정한 인덱스 삭제

// 시작 인덱스, 삭제할 갯수
console.log('1 >>', fruits);            // 1 >> (8) ['메론', '사과', '바나나', '딸기', '복숭아', '수박', '파인애플', '귤']
fruits.splice(1, 2);
console.log('2 >>', fruits);            // 2 >> (6) ['메론', '딸기', '복숭아', '수박', '파인애플', '귤']

// 시작 인덱스만 넣을 경우 시작 인덱스부터 끝까지 삭제됨
fruits.splice(4);
console.log('3 >>', fruits);            // 3 >> (4) ['메론', '딸기', '복숭아', '수박']

// 삭제 후 그 자리에 추가도 가능 (즉, 삭제 후 대체 가능)
fruits.splice(1, 1, '한라봉', '포도');
console.log('4 >>', fruits);            // 4 >> (5) ['메론', '한라봉', '포도', '복숭아', '수박']



// combine two arrays
// concat: 두 배열 묶기
const fruits2 = ['감', '배'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);






console.clear();

/* 5. Searching */
console.log(fruits);                            // ['메론', '한라봉', '포도', '복숭아', '수박']

// indexOf(): 인덱스를 리턴, 없으면 -1 리턴
// 중복의 값이 있을 경우 처음으로 발견한 인덱스 리턴
console.log(fruits.indexOf('포도'));            // 2
console.log(fruits.indexOf('사과'));            // -1

// 만약 같은 값의 데이터가 있을 경우
// 일단 중복 데이터 추가
console.log(fruits);                        // ['메론', '한라봉', '포도', '복숭아', '수박']
fruits.push('포도');
console.log(fruits);                        // ['메론', '한라봉', '포도', '복숭아', '수박', '포도']

// indexOf() 사용하게 되면 처음으로 발견한 값의 인덱스인 2 출력
console.log(fruits.indexOf('포도'));        // 2

// lastIndexOf(): 끝에서부터 발견한 값의 인덱스인 5 출력
console.log(fruits.lastIndexOf('포도'));    // 5


// includes(): 값이 있는지 확인. 있으면 true, 없으면 false 리턴
console.log(fruits.includes('수박'));               // true
console.log(fruits.includes('사과'));               // false




