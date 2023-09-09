'use strict';


/* 8.0 - Geolocation */

// 1. user의 위도, 경도 알아내기
//      - navigator.geolocation.getCurrentPosition(arg1, arg2): user의 위치(geolocation)을 알려줌
//      - getCurrentPosition(arg1, arg2)
//          - arg1: 성공 시 실행할 함수. 이 함수는 object 하나를 입력 받음. 그 object는 js가 줌
//          - arg2: 실패 시 실행할 함수


/* 8.1 - Weather API */
// 2. 날씨 API: https://openweathermap.org/
//      - 해당 장소의 이름과 현재 날씨가 필요함

//      - API Key 위치: my pfofile > API keys
//          - 7da073088a78c8b7fd8fa39259adb1a8

//      - 문서 위치: API > Current & Forecast weather data collection > Current Weather Data 
//          > API doc > Call current weather data > How to make an API call > API call
//      - https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//          - https://api.openweathermap.org/data/2.5/weather?lat=37.5881388&lon=126.6717861&appid=7da073088a78c8b7fd8fa39259adb1a8


// 참고. 강의에 있는대로 api형식 변경하려면 크롬 확장 프로그램 JSON Viewer 설치
// 그나저나 김포로 위치 뜸 왜지

// 3. fetch(url) 이용하여 URL 얻기
//  - url에 '&units=metric' 도 있어야 fetch(url)가 실행됨           => fetch(url);
//  - 개발자도구 > Network > 새로고침
//  - Name에 JS가 URL로 요청한게 뜸. 클릭 후 Preview 탭에 응답결과가 나옴
//  - fetch는 promise기 때문에 당장 뭔가가 일어나지 않고 시간이 좀 걸린 뒤에 일어남
//  만약 서버가 응답하기까지 오래 걸린다면, .then()을 사용하기
//  URL을 fetch하고 그 다음으로 response의 json를 얻을 수 있음      => fetch(url).then(response => response.json());
//  - 내용을 추출했다면 data를 얻었을테니, data로 원하는 것들 확인해보기

// 4. 해당 위치의 장소 이름 얻기
//      => fetch(url).then(response => response.json()).then(data => { console.log(data.name); });

// 5. 해당 위치의 날씨 정보 얻기
//      => fetch(url).then(response => response.json()).then(data => { console.log(data.weather[0].main); });



const API_KEY = '7da073088a78c8b7fd8fa39259adb1a8';
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

function onGeoOk(position) {
    // 이 중 coords(좌표)를 확인하면 latitude(위도), longitude(경도)를 알 수 있음
    // console.log(position);

    const lat = position.coords.latitude;           // 37.5881388
    const lon = position.coords.longitude;          // 126.6717861

    // url에 '&units=metric'도 추가하기
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(`You live it (${lat}, ${lon})`);
    // console.log(url);

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector('#weather span:first-child');
            const weather = document.querySelector('#weather span:last-child');
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });

}

function onGeoError() {
    alert('Can\'t find you. No weather for you.');
}

