/* 
    1. use strict
    added in ES 5
    use this for Valina JavaScript
*/
    'use strict';


/*
    2.Variable (변수) - let (added in ES6)
    rw(read/write)
*/

/* 변수선언 및 할당, 재할당 */
let name = 'ellie';
console.log(name);

name = "hello";
console.log(name);


/* Global Scope */
let globalName = 'globalName';

/* Block Scope */
{
    let blockName = "blockName";
    console.log('globalName1 >> ', globalName);
    console.log('blackName1 >> ', blockName);

}

console.log('globalName2 >> ', globalName);
// console.log('blackName2 >> ', blockName);        // 에러남


/*
    3. Constant (상수) - const 
    r(read only)
    use const whenever possible
    only use let if variable needs to change

    Immutable data types (데이터 변경 불가능)
    : premitive types, frozen object (i.e. object.freeze())
    Mutable data types (데이터 변경 가능)
    : all objects by default are mutable in JS



    favor immutable data type always for a few reasons:
    - security
    - thread safety
    - reduce human mistakes
*/






/* 
    4. Variable types
        4-1) primitive, single item: number, string, boolean, null, undefined, symbol
        4-2) Object, box container
        4-3) function, first-class function

*/

const count = 17;   // integer
const size = 17.1;  // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log('value: ', size, ', type: ', typeof size);


const infinity = 1 / 0;             // 숫자를 0으로 나누었을 경우
console.log(infinity);              // Infinity

const negativeInfinity = -1 / 0;    // -숫자를 0으로 나누었을 경우
console.log(negativeInfinity);      // -Infinity

const nAn = 'not a number' / 2;     // 숫자가 아닌 것을 나누었을 경우
console.log(nAn);                   // NaN


/* number */
// js에서 number의 범위: (-2**53) ~ (2**53)
// bigint Type은 숫자 맨 마지막에 n을 붙이면 됨
// 최근에 나온거라 크롬, 파이어폭스에서만 지원하므로 사용 ㄴㄴ 
const bigint = 12345646487987789464564351321n;
console.log(`bigint: ${bigint}, type: ${typeof bigint}`);               // bigint: 12345646487987789464564351321, type: bigint
console.log(Number.MAX_SAFE_INTEGER);


/* string */
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);            // value: hello brendan, type: string

const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);            // value: hi brendan!, type: string



/* boolean */
const canRead = true;
const test = 3 < 1;     // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);              // value: true, type: boolean
console.log(`value: ${test}, type: ${typeof test}`);                    // value: false, type: boolean

/* null */
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);              // value: null, type: object

/* undefined */
let x;
console.log(`value: ${x}, type: ${typeof x}`);                          // value: undefined, type: undefined



/* symbol, create unique identifiers for objects */
// map이나 다른 자료구조에서 고유한 식별자가 필요하거나 우선순위를 부여하고 싶을 경우 사용

// 동일한 string을 생성하든 안 하든간에 다른 symbol로 만들어지기 때문에 false
// 고유한 식별자를 생성
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);   // false

// 동일한 string을 생성하고 같은 symbol을 만들고 싶다면 for를 사용
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);

// 출력하려면 항상 .description을 이용하여 String으로 변환한 후에 출력
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)               // value: id, type: symbol


/* Object */
const ellie = {name: 'ellie', age: 20};
console.log(`ellie.age >> ${ellie.age}`);               // ellie.age >> 20
ellie.age = 21;
console.log(`ellie.name >> ${ellie.name}`);             // ellie.name >> ellie
console.log(`ellie.age >> ${ellie.age}`);               // ellie.age >> 21


/* 5. Dynamic typing: dynamically typed language */
let text = 'hello';
console.log(text.charAt(0));            // h 출력. string형이기 때문에 출력 가능

console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);

// console.log(text.charAt(0));        // 에러. number형이기 때문에 출력 불가능

