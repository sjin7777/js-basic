'use strict';
console.log('hi');


console.log('\n\n@@@ 2 @@@');
/* 2. Variables */
const a = 5;
const b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);



console.log('\n\n@@@ 4 @@@');
/* 4. Booleans */
const amIFat1 = true;
console.log(amIFat1);

// null
const amIFat2 = null;
console.log(amIFat2);

// undefined
let amIFat3;
console.log(amIFat3);



console.log('\n\n@@@ 5 @@@');
/* 5. Arrays */
const mon = 'mon';
const tue = 'tue';
const wed = 'wed';
const thu = 'thu';
const fri = 'fri';
const sat = 'sat';
const sun = 'sun';

const daysOfWeek1 = [mon, tue, wed, thu, fri, sat, sun];
console.log(daysOfWeek1);


const daysOfWeek2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// Get Item from Array
console.log(daysOfWeek2);

console.log(daysOfWeek2[1]);

// Add one more day to the array
daysOfWeek2.push('sun');

console.log(daysOfWeek2);


const toBuy = ['potato', 'tomato', 'pizza'];
console.log(toBuy);

toBuy.push('water');
console.log(toBuy);

console.log(toBuy[7897987894646546]);           // undefined



console.log('\n\n@@@ 6 @@@');
/* 6. Object */
const playerName = 'nico';
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = 'little bit';

// Object인 Player 생성하여 위 코드 바꿔보기
const player = {
    name: 'nico'
    , points: 121212
    , handsome: false
    , fat: true
} 

console.log(player);
console.log(player.name);
console.log(player['name']);

// Object 내용 변경 (const여도 Object 자체가 아니라 그 안에 내용을 변경하는거라서 가능함)
player.fat = false;
player.points = player.points + 89898989;
console.log(player);

// Object 내용 추가
player.lastName = 'potato';
console.log(player);





console.log('\n\n@@@ 7 8 @@@');
/* 7. 8. Functions part One Two */
function sayHello1(nameOfPerson) {
    console.log('hello~~~~', nameOfPerson);
}

function sayHello(nameOfPerson, ageOfPerson) {
    console.log( nameOfPerson, ageOfPerson);
}


sayHello1('a');
sayHello1('b');
sayHello('c', 23);
sayHello('d', 56);


function plus(a,b) {
    console.log(a + b);
}

function divide(a,b) {
    console.log(a / b);
}

plus(1,2);
divide(8,3);


// player2 Object 생성하고, 내용에 함수도 만들어보기
const player2 = {
    name: 'nico'
    , sayHello: function() {
        console.log('hello~@!@');
    }
    , sayHelloName: function(name) {
        console.log('hello ~ ', name)
    }
}

console.log(player2.name);
player2.sayHello();
player2.sayHelloName('스폰지밥');




console.log('\n\n@@@ 9 @@@');
/* 9. Recap */
// var는 절대 사용ㄴㄴ, 항상 const 사용, 가끔 let 사용
const aa = 5;
let isNicoFat = true;
isNicoFat = false;
console.log(isNicoFat);

const toBuyy = ['a', 'b', 'c'];

console.log(toBuyy);
toBuyy.push('d');
console.log(toBuyy);
toBuyy[5] = 'z';
console.log(toBuyy);




console.log('\n\n@@@ 10 @@@');
/* 10. Recap 2 */
const playerr = {
    name: 'Nico'
    , age: 98
};

console.log(playerr.name);
console.log(playerr['name']);
console.log(playerr['name'] = 'lyn');
console.log(playerr);

playerr.abc = 'd';
console.log(playerr);



const calculator = {
    add: function(a, b) {
        console.log(a + b);
    }
    , substract: function(a, b) {
        console.log(a - b);
    }
    , multiply: function(a, b) {
        console.log(a * b);
    }
    , divide: function(a, b) {
        console.log(a / b);
    }
}

calculator.add(1,3); 
calculator.substract(1,3); 
calculator.multiply(1,3); 
calculator.divide(1,3); 

calculator.remainder = function(a, b) {
    console.log(a % b);
}
calculator.remainder(5, 4);

calculator.square = (a, b) => console.log(a ** b);
calculator.square(2,3);




console.log('\n\n@@@ 11 @@@');
/* 11. Returns */
const cal = {
    plus: (a, b)         => a + b
    , minus: (a, b) => a - b
    , times: (a, b)  => a * b
    , divide: (a, b)    => a / b
    , remainder: (a, b) => a % b
    , power: (a, b)    => a ** b
}

const cal2 = {
    plus: function(a, b) {
        return a + b;
    }
    , minus: function(a, b) {
        return a - b;
    }
    , times: function(a, b) {
        return a * b;
    }
    , remainder: function(a, b) {
        return a / b;
    }
    , power: function(a, b) {
        return a ** b;
    }
}


console.log(cal.plus(3,4));

console.log(cal.power(4,6));
// alert(cal.add(4,5));

const plusResult = cal.plus(4,7);
const minusResult = cal.minus(plusResult, 6);
const timesResult = cal.times(10, minusResult);
const divideResult = cal.divide(timesResult, plusResult);
const powerResult = cal.divide(divideResult, minusResult);

console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(divideResult);
console.log(powerResult);



const age1 = 96;
function calKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calKrAge(age1);
console.log(krAge);





console.log('\n\n@@@ 12 @@@');
/* 12. ReCap */
// return을 하면, function은 작동을 멈추고 결과값을 return하고 끝난다




console.log('\n\n@@@ 13 @@@');
/* 13. Conditionals */
// prompt() 는 사용자에게 창을 띄워주고, 2개의 argument를 받음
// 하나는 타입이 string인 message(문자), 다른 하나는 타입이 string인 default
// promt()는 사용자에게 message의 값을 보여주고 default의 값을 입력하게 함
// const age = prompt('How old are you?');

// console.log(age);
// 그런데, prompt()를 잘 사용하지 않음
// 1. 사용자가 입력하기 전까지 js 코드의 실행을 멈추게 하기 때문
// 2. message style이 구림. 즉 CSS를 적용시킬 수 없음
// 3. 버튼 변경도 불가능함
// 4. 해당 팝업을 제한하는 브라우저도 있음
// 5. 유저에게 값을 물어보는 방법인데 아주 오래된 방법임. 
//   요즘에는 HTML, CSS로 만든 자신만의 창을 사용함
// 브라우저로 할 수 있는 가장 직접적인 방법이고 간단하게 사용이 가능하기에 쓰는 것 뿐임


// typeof: 변수의 타입을 알 수 있음
// console.log(typeof age);

// parseInt(변수): string => number로 변환 (변환 불가능한 문자일 경우 NaN 반환)
// console.log(age, parseInt(age));
// console.log(typeof age, typeof parseInt(age));


// parseInt한 후의 age가 number형이 아니라면 message 띄우기
// const age2 = parseInt(prompt('How old are you?'));

// console.log(age2);
// console.log(typeof age2);



console.log('\n\n@@@ 14 @@@');
/* 14. Conditionals part Two */
// 값이 NaN이면 true 반환
// console.log(isNaN(age2));

// if(isNaN(age2)) {
//     console.log('Please write a number');
// } else {
//     console.log('Thank you for writing your age');
    // if(age2 <= 18) {
    //     console.log('술 마시면 안댐');
    // } else if(18 < age2 && age2 <= 50) {
    //     console.log('술 마셔도 댐');
    // } else {
    //     console.log('술 ㄴㄴ 건강 챙겨');
    // }
// }





console.log('\n\n@@@ 15, 16 @@@');
/* 15. Conditionals part Three */
/* 16. Recap */

// if(isNaN(age2) || age2 <= 0) {
//     console.log('Please write a real positive number');
// } else if(age2 <= 18) {
//     console.log('You are too young')
//     console.log('술 마시면 안댐');
// } else if(18 < age2 && age2 <= 50) {
//     console.log('You can drink');
//     console.log('술 마셔도 댐');
// } else if(50 < age2 && age2 <= 80) {
//     console.log('You should exercise');
// } else if(age2 === 100) {
//     console.log('Wow you are wise');
// } else if(age2 > 80) {
//     console.log('You can do whatever you want');
// }



