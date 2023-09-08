'use strict';


console.clear();

// 이미지 모음
const images = [
    "0.jpg"
    , "1.jpg"
    , "2.jpg"
    , "3.jpg"
]
const chosenImage = images[Math.floor(Math.random() * images.length)];


/* JS에서 <img src="" /> 생성하여 HTML에 추가해보기 */

// 1. img 태그 생성하기
const bgImage = document.createElement("img");
// console.log(bgImage);               // <img>

// 2. 생성한 img에 src속성 값 넣기
bgImage.src = `img/${chosenImage}`;
// console.log(bgImage);               // <img src="img/x.jpg">

// 3. 생성한 img를 body 내부에 추가하기 (body 태그 맨 아래에 위치하게 됨)
document.body.appendChild(bgImage);



// 댓글 참고. body에 appendChild를 사용하여 추가할 시에 insertBefore() 메서드를 이용하며 위치 변경
// insertBefore(arg1, arg2): 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입함
//                          - arg1: 새로운 노드(추가하고 싶은 노드)
//                          - arg2: 참조할 노드
// const h2 = document.querySelector('#clock');
// document.body.insertBefore(bgImage, h2);










/* 5.2 - Recap (background.js, quotes.js) */

/* 

1. Array에서 랜덤하게 한가지 element를 골라냄           => Math.floor(Math.random() * array.length)
2. js에서 HTML element 생성                            => const bgImg = document.createElement("img");    
3. js에서 생성한 HTML element의 property 지정          => bgImage.src = `img/${chosenImage}`;
4. js에서 생성한 HTML element를 HTML Body안에 넣기      =>  document.body.appendChild(bgImage);

*/

// 참고. 
// document.body.appendChild(element): 해당 요소를 body안 맨 밑에 추가
// document.body.prepend(element): 해당 요소를 body안 맨 위에 추가