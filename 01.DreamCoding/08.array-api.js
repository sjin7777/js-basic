'use strict';

console.log('\n\nQ1');
/* Q1. make a string out of an array */
// 주어진 배열을 string으로 변환
{
    const fruits = ['apple', 'banana', 'orange'];

    {
        // 풀이
        let result = '';
        fruits.forEach((fruit) => result += fruit);
        console.log(result);        // applebananaorange
    }
    {
        // 강사님 풀이
        // join()
        const result = fruits.join();
        console.log(result);        // apple,banana,orange
        
    }
}

console.log('\n\nQ2');
/* Q2. make an array out of a string */
// 주어진 string을 array로 변환
{    
    const fruits = '🍎, 🥝, 🍌, 🍒';
    
    {
        // 풀이
        const result = [];
        result.push('🍎', '🥝', '🍌', '🍒');
        console.log(result);                    // (4) ['🍎', '🥝', '🍌', '🍒']
    }
    {
        // 강사님 풀이
        // split(구분자(, 갯수))
        const result = fruits.split(',');
        console.log(result);                    // (4) ['🍎', ' 🥝', ' 🍌', ' 🍒']
        
        // 만약 배열의 앞에 있는 2개만 전달받고 싶은 경우
        console.log(fruits.split(',', 2));      // (2) ['🍎', ' 🥝']
        // 만약 구분자를 전달하지 않으면 문자열 전체가 배열 한 곳에 들어가게 됨
        // 그렇기에 split()을 사용할 때에는 구분자를 반드시 써줘야 함
        console.log(fruits.split());            // ['🍎, 🥝, 🍌, 🍒']
    }
}

console.log('\n\nQ3');
/* Q3. make this array look like this: [5, 4, 3, 2, 1] */
// 주어진 배열의 순서를 거꾸로 정렬하기
{
    const array = [1, 2, 3, 4, 5];
    
    {
        // 풀이
        const result = [];
        for(let i = array.length-1; i >= 0; i--) {
            result.push(array[i]);
        }
        console.log(result);                // (5) [5, 4, 3, 2, 1]
    }
    {
        // 강사님 풀이
        // reverse() 사용
        // reverse()를 사용한 array 그 자체의 배열도 순서가 바뀜 
        // (역순으로 해주고, 배열 자체를 변화시킴)
        const result = array.reverse();
        console.log(result);                // (5) [5, 4, 3, 2, 1]
    }
}




console.log('\n\nQ4');
/* Q4. make new array without the first two elements */
// 배열에서 첫번째와 두번째 요소를 제외한 나머지 [3, 4, 5]만 들어있는 새로운 배열 만들기
{
    const array = [1, 2, 3, 4, 5];

    {
        // 풀이 1
        // slice(시작 인덱스, 끝 인덱스): 배열 특정 부분 리턴
        const result = array.slice(2);
        console.log(result);                    // [3, 4, 5]
    }
    {
        // 풀이 2
        // splice(시작 인덱스, 길이): 배열 자체에서 데이터 삭제

        // const result = array.splice(2);
        // console.log(result);                    // [3, 4, 5]
    }
    {
        // 풀이 3
        // shift(): 배열 자체에서 데이터 삭제
        // 풀이2에서 splice로 array를 잘라버렸기 때문에 풀이2를 주석처리 해야 답이 나옴

        // const result = array;
        // result.shift();
        // result.shift();
        // console.log(result);                    // [3, 4, 5]
    }
    {
        // 강사님 풀이
        // slice(시작 인덱스, 끝 인덱스)
        // splice는 배열 자체에서 데이터를 삭제하기 때문에 사용하지 않았음
        const result = array.slice(2, 5);
        console.log(result);
    }


}



/* Q5 ~ Q10 */
class Student {
    // 생성자(이름, 나이, 등록여부, 점수)
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];


console.log('\n\nQ5');
/* Q5. find a student with the score 90 */
// 점수가 90점인 학생 찾기
{
    // 풀이
    let result = 0;
    students.forEach((student) => {
        if(student.score === 90) result = student.name;
    });
    console.log(result);                    // C
}
{
    // 강사님 풀이
    // find(): 콜백함수를 만들어서 리턴하면 배열의 요소마다 호출이 되고, 
    //      각각의 요소를 받아왔을 때 조건이 true면 리턴하게 되는데,
    //      find는 첫번쨰로 true가 나오면 해당하는 그 배열의 요소를 리턴해줌
    
    // const result = students.find(function(student) {
    //     return student.score === 90;
    // });

    // 위 코드를 한 줄로 변경
    const result = students.find((student) => student.score === 90);
    
    console.log(result);                    // Student {name: 'C', age: 30, enrolled: true, score: 90}

}

console.log('\n\nQ6');
/* Q6. make an array of enrolled students */
// 학생들 중 수업에 등록한 학생들만 골라서 배열 생성
{
    // 풀이
    let result = [];
    students.forEach((student) => {
        if(student.enrolled === true) result.push(student.name);
    });
    console.log(result);            // (3) ['A', 'C', 'E']
}
{
    // 강사님 풀이
    // filter()
    const result = students.filter((student) => student.enrolled);
    console.log(result);            // [Student, Student, Student
}


console.log('\n\nQ7');
/* Q7. make an array containing only the students' scores
    result should be: [45, 80, 90, 66, 88]*/
// 학생들의 점수만 있는 배열 생성
{
    // 풀이
    const result = [];
    students.forEach((student) => result.push(student.score));
    console.log(result);                // (5) [45, 80, 90, 66, 88]
}
{
    // 강사님 풀이
    // map(): 배열에 있는 요소들을 함수를 이용하며 원하는대로 가공함

    const result = students.map((student) => student.score);
    console.log(result);                // (5) [45, 80, 90, 66, 88]
}


    console.log('\n\nQ8');
/* Q8. check if there is a student with the score lower than 50 */
// 학생들 중 50점보다 낮은 학생이 있는지 확인
{
    // 풀이
    let result = false;
    students.forEach((student) => {
        if(student.score < 50) result = true;
    });
    console.log(result);                // true
}
{
    // 강사님 풀이
    // some(): 배열에서 하나의 요소라도 조건에 만족하면 true 리턴
    const result = students.some((student) => student.score < 50);
    console.log(result);                // true

    // every(): 배열에서 모든 요소들이 조건에 만족해야 true 리턴
    //          그렇기에 범위도 반대고 !를 붙여서 위와 같게 만들었음
    //          하지만 이 문제의 경우에는 1개가 만족하는지 확인하기 위함이므로 some()이 더 직관적
    const result1 = !students.every((student) => student.score >= 50);
    console.log(result1);               // true
}



console.log('\n\nQ9');
/* Q9. compute students' average score */
// 학생들의 평균 점수 구하기
{
    // 풀이
    let result = 0;
    students.forEach((student) => result += student.score);
    result /= students.length;
    console.log(result);            // 73.8
}
{
    // 강사님 풀이
    // reduce(): 배열에 있는 모든 요소들의 값들을 누적할 때 사용
    //          원하는 시작점부터 모든 배열을 돌면서 어떤 값을 누적할 때 사용 
    const result = students.reduce((prev, curr) => {
        console.log('====================');
        console.log('이전 값: ', prev);   
        console.log('현재 값: ', curr);

        // previous value는 이전에 콜백함수에서 리턴된 값이 전달되어져 오고, 
        // current은 배열의 item을 순차적으로 전달받는다
        return prev + curr.score;            // 계속 반복하며 누적되게 리턴
    }, 0);  // 0부터 시작

    console.log(result / students.length);        // 73.8

    // 위 코드 간단하게 하기
    const result1 = students.reduce((prev,curr) => prev + curr.score, 0);
    console.log(result1 / students.length);       // 73.8


    // reduceRight(): 배열 뒤에서부터 누적
    const result2 = students.reduceRight((prev, curr) => {
        console.log('====================');
        console.log('이전 값: ', prev);   
        console.log('현재 값: ', curr);
        return prev + curr.score;            // 계속 반복하며 누적되게 리턴
    }, 0);  // 0부터 시작
    console.log(result2 / students.length);       // 73.8

    // 위 코드 간단하게 하기
    const result3 = students.reduceRight((prev, curr) => prev + curr.score, 0);
    console.log(result3 / students.length);       // 73.8

}


console.log('\n\nQ10');
/* Q10. make a string containing all the scores
    result should be: '45, 80, 90, 66, 88' */
// 학생들의 점수를 String으로 변환해서 만들기
{
    // 풀이
    // const result = students.sjoin();
    let result = [];
    students.forEach((student) => result.push(student.score));
    result = result.join();
    console.log(result);        // 45,80,90,66,88
}
{
    // 강사님 풀이
    // 1. map() 이용하여 학생들의 배열을 먼저 점수로 변환(가공). 즉 새로운 배열 생성
    // 2. 점수 배열에 join()을 사용하여 String으로 변환
    const result = students.map((student) => student.score).join();
    console.log(result);        // 45,80,90,66,88
}
{
    // 강사님 추가 문제
    // 만약, 추가로 점수로 50점 이상인 학생의 점수만 출력
    // 3. filter() 사용
    const result = students.map((student) => student.score)
                        .filter((score) => score >= 50) // map을 이용하여 점수로 가공했기 때문에 점수가 옴
                        .join();

    console.log('추가문제 > '+ result);         // 추가문제 > 80,90,66,88
}


    
console.log('\n\nQBonus');
/* Bonus! do Q10 sorted i n ascending order
result should be: '45, 66, 80, 88, 90' */
// 학생들의 점수를 오름차순으로 정렬해서 string으로 변환
{
    // 풀이
    const result = students.map((student) => student.score)
                            .sort()
                            .join();
    console.log(result);    // 45,66,80,88,90
}
{
    // 강사님 풀이
    const result = students.map((student) => student.score)
                            // 내림차순일 경우 b - a
                            .sort((a, b) => a - b)
                            .join();
    console.log(result);    // 45,66,80,88,90
}
