'use strict';


/* 1. String concatenation */
console.log('my' + ' cat');         // my cat
console.log('1' + 2);               // 12
console.log(`string literals: 1 + 2 = ${1+2}`);     // string literals: 1 + 2 = 3



/* 2. Nemeric operators */
console.log(1 + 1);     // add                  // 2 
console.log(1 - 1);     // substract            // 0
console.log(1 * 1);     // multiply             // 1
console.log(1 / 1);     // divide               // 1
console.log(5 % 2);     // remainder            // 1
console.log(2 ** 3);    // exponertiation       // 8


/* 3. Increment and decrement operators */
let counter = 2;
const preIncrement = ++counter;
console.log(`counter >> ${counter}, preIncrement >> ${preIncrement}`);      // counter >> 3, preIncrement >> 3

const postIncrement = counter++;
console.log(`counter >> ${counter}, postIncrement >> ${postIncrement}`);    // counter >> 4, postIncrement >> 3


/* 4. Assignment operators */
let x = 3;
let y = 6;

x += y;
x -= y;
x *= y;
x /= y;


/* 5. Comparision operators */
console.log(10 < 6);    // less than                // false
console.log(10 <= 6);   // less than or equal       // false
console.log(10 > 6);    // greater than             // true
console.log(10 >= 6);   // greater than or equal    // true


/* 6. Logical operators: || (or), &&, (and), ! (not) */
const value1 = false;
const value2 = 4 < 2;

// || (or). finds the first truthy value
// 하나만 참이면 되므로 앞에서부터 하나라도 참이 보이면 뒤에꺼는 안 봄. 멈춤
// 그렇기에 간단한 식을 먼저 배치하는게 좋음
console.log(`or: ${value1 || value2 || check()}`);          // true

// && (and), finds the first falsy value
// 다 참이여야 하므로 앞에서부터 하나라도 거짓이 보미면 뒤에꺼는 안 봄. 멈춤
// 그렇기에 간단한 식을 먼저 배치하는게 좋음
console.log(`and: ${value1 && value2 && check()}`);          // false

function check() {
    for(let i = 0; i < 10; i++) {
        //wasting time
        console.log('agdgsd');
    }
    return true;
}


// ! (not)
// 값을 반대로 바꾸어줌
console.log(!value1);           // true


/* 7. Equality */
const stringFive = '5';
const numberFive = 5;

// == lose equality, with type conversion 
// 느슨한 equality. 타입 신경 안 씀
console.log(stringFive == numberFive);      // true
console.log(stringFive != numberFive);      // false

// === strict equality, no type conversion
// 타입까지 신경쓰는 equality
console.log(stringFive === numberFive);     // false
console.log(stringFive !== numberFive);     // true


// Object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;

console.log(ellie1 == ellie2);              // false
console.log(ellie1 === ellie2);             // false
console.log(ellie1 === ellie3);             // true


// equlity - puzzler
console.log(0 == false);                    // true
console.log(0 === false);                   // false
console.log('' == false);                   // true
console.log('' === false);                  // false
console.log(null == undefined);             // true
console.log(null === undefined);            // false



/* 8. Conditional operators: if */
// if, else if, else
const name = 'ellie';
if(name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}
// Welcome, Ellie!



/* 9. Ternary operator: ? */
// condition ? value1  : value2;
console.log(name === 'ellie' ? 'yes' : 'no');


/* 10. Switch statement */
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


/* 11. Loops */
// while loop, while the condition is truthy,
// body code is executed. 
let i = 3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);


// for loop, for(begin; condition; step) 
for(i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for(let i = 3; i > 0; i = i-2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
} 

// nested loops
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i = 0; i <= 10; i++) {
    if(i % 2 === 0) {
        continue;
    } 
    console.log(`continue >>  ${i}`);
    
}

// Q2. iterate from 0 to 10 and print numbers untill reaching 8 (use break)
for(let i = 0; i <= 10; i++) {
    if(i === 8) break;
    console.log('break >> ', i);
}
