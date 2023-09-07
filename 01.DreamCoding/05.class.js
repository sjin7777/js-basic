'use strict';

// Object-oriented programming

// class: template, declare once, no data in
// object: instance of a class, created many times, data in

// JavaScript classes
//  - introduce in ES6
//  - syntactical sugar over prototype-based inheritance


/* 1. Class declarations */
// Person이라는 클래스 생성
class Person {
    // 생성자
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello`);
    }
}

/* Object 생성 */
const ellie = new Person('ellie', 20);
console.log(ellie);                 // Person {name: 'ellie', age: 20}
console.log(ellie.name);            // ellie
console.log(ellie.age);             // 20
ellie.speak();                      // ellie: hello


/* 2. Getter and Setter */
class User {
    // constructor(생성자)
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // getter(이 메서드)를 정의하는 순간, 
    // 생성자에 있는 this.age는 메모리에 올라가있는 데이터를 읽는 것이 아닌 getter를 호출함
    
    // 값 리턴
    get age() {
        return this._age;
    }

    // setter(이 메서드)를 정의하는 순간, 
    // 값을 할당할 때, 생성자에 있는 age를 바로 할당하는 것이 아닌 setter를 호출함
    // 이 setter 안에서 전달된 value를 this.age에 할당할 때 메모리의 값을 업데이트 하는 것이 아니라, 
    // setter를 계속 호출하게 됨
    // 그렇기에 getter, setter에 있는 변수명을 다른 변수명으로 변경해줘야 함

    // 값을 받아와서 값 설정
    set age(value) {
        // 올바르지 않은 값일 경우 경고 보내기
        // if(value < 0) {
        //     throw Error('age can not be negative');
        // }
        
        // 아니면 값을 지정해주기
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);                       // 0




/* 3. Fields (public private) */
// Too soon! 최근에 추가되어서 아직 잘 사용하지 않음
class Experiment {
    // constructor(생성자)를 정의하지 않고 필드 정의할 수 있음
    
    // 그냥 정의하면 public (외부에서 접근 가능)
    publicField = 2;
    
    // # 기호를 붙이면 private (외부에서 접근 불가능). 클래스 내부에서만 값이 보여지고 접근하며 변경 가능 
    #privateField = 0; 
}
const experiment = new Experiment();
console.log(experiment.publicField);        // 2
// private 필드이기 때문에 값을 읽을수도 없고, 변경할 수도 없음
console.log(experiment.privateField);       // undefined




/* 4. Static properties and methods */
// Too soon! 최근에 추가되어서 아직 잘 사용하지 않음
// Obeject, 데이터와 상관없이 Class에 있는 고유한 값과 동일하게 반복적으로 사용되는 메서드들을 
// static 키워드를 붙이면 Object 상관없이 Class 자체에 연결됨
// static은 Object마다 할당되어지는 것이 아니라 Class 자체에 붙어있음
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);

// publisher() 메서드는 Article class에 있기에 Class 이름을 이용해서 호출 
console.log(article1.publisher);        // undefined
console.log(Article.publisher);         // Dream Coding


// 그렇기에 static 함수를 호출할 때도 Class 이름을 이용해서 호출
Article.printPublisher();               // Dream Coding



/* 5. Inheritance */
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

// shape 클래스 상속
class Rectangle extends Shape {}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();       // drawing blue color of
console.log(rectangle.getArea());


class Triangle extends Shape {
    // 오버라이딩 했기 때문에 shape에 정의된 메서드는 정의되지 않음
    draw() {
        super.draw();   // 부모인 Shape의 draw() 메서드 호출
        console.log('▲');
    }
    getArea() {
        return this.width * this.height / 2;
    }
}
const triangle = new Triangle(30, 2, 'yellow');
triangle.draw();
console.log(triangle.getArea());




/* 6. Class checking: instanceof */
// 왼쪽에 있는 Object가 오른쪽에 있는 클래스를 이용해서 만들어진 Object인지 확인
console.log(rectangle instanceof Rectangle);        // true
console.log(triangle instanceof Rectangle);         // false
console.log(triangle instanceof Triangle);          // true
console.log(triangle instanceof Shape);             // true
console.log(triangle instanceof Object);            // true