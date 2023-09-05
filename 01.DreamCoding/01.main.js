// Whole-script strict mode syntax
// TimeScript에서는 선언할 필요 없지만 순수 바닐라 JavaScript에서는 선언하는게 좋음
// 1. 선언되지 않은 변수의 값에 대해 할당하거나, 기존에 존재하는 프로토타입을 변경하는 짓을 막아줌 (에러를 띄워줌)
// 2. js이 효율적이고 더 빠르게 분석할 수 있기에 성능 개선에도 좋음
// 그렇기에 js 파일 맨 위에 이를 선언 후 개발하도록 함
'use strict';


console.log('Hello Worlddd');
