'use strict';

/* 3.0 - The Document Object */
/* JS는 HTML에 이미 연결되어 있음 */
// HTML에서 여러 정보를 가져올 수도 있고, JS 코드에서 그 항목을 확인하는 것도 가능 

/* 콘솔창에서 입력 후 확인해보기 */
/*
document;
console.dir(document);
document.title;          // js는 HTML에 접근하고 읽을 수 있게 설정되어 있음을 확인
document.title = 'hi';      // 브라우저 제목 변경됨. 개발자도구 Elements에서 <html>태그 안에 <title>태그 보면 이것도 변경된거 확인
document.title = 'Hello! From JS!';
*/


/* 3.1 - HTML in JavaScript */
/*
// 1. HTML 가져오기 - id (id는 String이어야 함) => document.getElementById("아이디명")
const title = document.getElementById("title");
console.log(title);

// console.dir(): element를 더 자세히 보여줌
console.dir(title);     // innerHTML, innerText, outerHTML, outerText, textContent에 해당 값이 있음

// title에 있는 값을 js로 변경
title.innerText = "Got you";

console.log(title.id);
console.log(title.className);
*/



/* 3.2 - Searching For Elements */
// 2. HTML 가져오기 - class => document.getElementsByClassName("클래스명") 
//                많은 element를 한 번에 가지고 와야할 경우에 사용하기 좋음 (배열 형태로 가져와짐)
const hellos = document.getElementsByClassName("hello");
console.log(hellos);        // HTMLCollection(5) [h2.hello, h2.hello, h2.hello, h2.hello, h2.hello]
                            // 배열로 출력됨. 


// 3. HTML 가져오기 - Tag => document.getElementsByTagName("태그명")
const tag = document.getElementsByTagName("h1");
console.log(tag);


//* ******************************************************************** *//
// 4. HTML 가져오는 가장 좋은 방법
//                              - id일 경우:     #아이디명
//                              - 클래스일 경우: .클래스명
//                              - 태그일 경우:   태그명
//  4-1. document.querySelector(): element를 CSS 방식으로 검색할 수 있음
// 이를 사용할 경우 첫번째 것만 가져오기 때문에 1개만 나오는데, 2개 이상일 수도 있다

// 클래스 hello 안에 있는 h1 태그 가져오기 
const divH1 = document.querySelector(".hello h1");
console.log(divH1);

const helloss = document.querySelector(".hello");
console.log(helloss);       // element로 출력됨. 첫번째 것만 나옴

//  4-2. document.querySelectorAll()
// 첫번째거 1개의 element만 가져오는 document.querySelector()를 모두 가져오게 함
const hellossAll = document.querySelectorAll(".hello");
console.log(hellossAll);    // 배열로 출력됨
