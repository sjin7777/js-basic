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


console.clear();






/* 3.3 - Events */
// HTMLelement가 addEventListner(type, listener) 호출
// event(type) 발생 시 호출 할 function(listener) 전달

// div 태그 내부에 있고, hello 클래스의 first-child인 h1태그 Selector 
const h1 = document.querySelector("div.hello:first-child h1");

console.log(h1);

// 해당 요소의 내용 변경
h1.innerText = 'HELLO';
console.dir(h1);

// title의 style color를 blue로 변경
h1.style.color = 'blue';


function handleTitleClick() {
    h1.style.color = 'green';

    console.log('h1 was clicked!');
}


// HTMLelement(h1)가 type(click)에 따라 이벤트(handleTitleClick 함수 실행) 발생
// 유저가 title을 click할 경우에 JS가 실행버튼을 대신 눌러주기
h1.addEventListener('click', handleTitleClick);







/* 3.4 - Events part Two */
// https://developer.mozilla.org/en-US/docs/Web/API/Element
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

// 위 문서 보는거 말고 사용 가능한 event 찾는 법
// 1. HTMLelement의 property 확인 
console.dir(h1)
// 2. property에서 on으로 시작하는 것들이 event listener
//  addEventListener에서 type에 on을 빼고 씀


// 해당 요소에 마우스를 올렸을 경우 이벤트 발생
h1.addEventListener('mouseenter', handleMouseEnter);
// 해당 요소에 마우스가 올렸다가 요소에서 벗어났을 경우 이벤트 발생
h1.addEventListener('mouseleave', handleMouseLeave);

function handleMouseEnter() {
    h1.innerText = 'Mouse is here';
}

function handleMouseLeave() {
    h1.innerText = 'Mouse is gone';
}





/* 3.5 - More Events */

const h2 = document.querySelector("div.hello h2");

console.log(h2);

// 다른 방법으로 사용해보기
// h2.addEventListener('click', handleTitleClick2);
h2.onclick = handleTitleClick2;

// h2.addEventListener('mouseenter', handleMouseEnter2);
h2.onmouseenter = handleMouseEnter2;

// h2.addEventListener('mouseleave', handleMouseLeave2);
h2.onmouseleave = handleMouseLeave2;

function handleTitleClick2() {
    h2.style.color = 'green';
    console.log('h2 was clicked!');
}
function handleMouseEnter2() {
    h2.innerText = 'Mouse is here';
}
function handleMouseLeave2() {
    h2.innerText = 'Mouse is gone';
}


// 하지만 addEventListenr를 사용하는게 더 좋음
// removeEventListener를 통해서 event listener를 제거할 수 있기 때문



/* window event */
// document는 head, body, title에 접근 가능 나머지 태그에는 접근 불가
// 나머지 태그는 querySelector 등으로 접근해서 가져오기

// 화면 크기가 변경될 경우에 document를 호출하고, 그 안에 있는 body에 접근 
window.addEventListener('resize', handleWindowResize);

function handleWindowResize() {
    document.body.style.backgroundColor = 'tomato';
}


// Clipboard events - copy: 해당 event는 유저가 copy 행위를 했을 때 발생한다
window.addEventListener('copy', handleWindowCopy);

function handleWindowCopy() {
    alert('copier!');
}


// Connection events - offline / online: wifi에 연결되어있는지 확인하는 이벤트
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);

function handleWindowOffline() {
    alert('SOS no WIFI');
}

function handleWindowOnline() {
    alert('WIFI Good');
}






console.clear();

/* 3.6 - CSS in JavaScript */
const changeColor = document.querySelector('div h3');
console.log(changeColor);
console.dir(changeColor);

changeColor.addEventListener('click', handleCCClick);

// 클릭할 때마다 색 변경하기 
function handleCCClick() {
/*
    if(changeColor.style.color === 'blue') {
        changeColor.style.color = 'tomato';
    } else {
        changeColor.style.color = 'blue';
    }
*/
    const currentColor = changeColor.style.color;
    let newColor;

    if(currentColor === 'blue') newColor = 'tomato';
    else newColor = 'blue';
    
    changeColor.style.color = newColor;

}


// 핵심
// 1. element 찾기
// 2. event를 listen 하기
// 3. 그 event에 반응하기





/* 3.7 - CSS in JavaScript part Two */
// 1. css파일에 클래스명이 active인 클래스 지정 

const h4 = document.querySelector("div.hello h4");
console.log(h4);

// 2. h4의 클래스명이 active인 클래스 할당, 클릭 후에는 h4에 추가된 active 클래스를 제거
function handleh4Click() {
    const clickedClass = 'clicked';
    if(h4.className === clickedClass) {
        h4.className = '';
    } else {
        h4.className = clickedClass;
    }
}

// 3. 클릭하면 h4 요소에 active 클래스 할당받아서, active 클래스의 속성 색으로 변경됨
// h4.addEventListener('click', handleh4Click);






/* 3.8 - CSS in JavaScript part Three */
// 3.7에서 클래스명을 지정해주는걸로 해보았는데, 만약 기존에 클래스명이 있을 경우에는 저렇게 하면 안 됨
// classList를 사용하여 class name을 변경해야 함
// classList: class들의 목록으로 작업할 수 있게끔 허용함
// className: 이전 class들은 상관하지 않고 교체함 (3.7에서 한 방법)

function handleh4Click2() {
    const clickedClass = 'clicked';

    // h4 요소의 클래스에 clickedClass가 포함되어 있는지 확인 
    if(h4.classList.contains(clickedClass)) {
        // clickedClass가 포함되어 있으므로 해당 클래스 제거
        h4.classList.remove(clickedClass);
    } else {
        // clickedClass가 포함되어 있지 않으므로 해당 클래스 추가
        h4.classList.add(clickedClass);
        
    }
}

// h4.addEventListener('click', handleh4Click2);


// handleh4Click2() 함수를 더 간편하게 하기
function handleh4Click3() {
    // 한 번만 사용할거기 때문에 바로 대입
    // const clickdClass = 'clicked';

    // toggle()은 classList에 해당 class name이 포함되어 있으면 제거하고, 포함되지 않았다면 추가함
    h4.classList.toggle('clicked');
}

h4.addEventListener('click', handleh4Click3);