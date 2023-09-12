'use strict';



///* 1. Counter 클래스 생성 */
{
    if(false){
        class Counter {
            // 2. 클래스 생성하면 생성자(constructor)가 생성됨
            constructor() {
                // 3. 클래스 생성하면 자체적으로 counter라는 변수가 있고 0으로 되어있음
                // 변수 counter는 클래스를 이용하여 object를 만드는 순간 0으로 초기화 됨
                this.counter = 0;
            }

            // 함수 선언
            // 클래스안에서 함수를 선언시에는 function 키워드를 쓰지 않음

            // 호출할 때마다 변수 counter의 값이 증가하는 함수
            increase() {
                this.counter++;
                console.log(this.counter);
            }
        }

        // coolCounter 변수에 클래스를 이용해서 Object 생성
        // new라는 키워드를 이용해서 Class를 만들게 되면, constructor()가 실행되는데, this.counter를 0으로 초기화 함
        // 그렇기에 현재 this.counter = 0;

        // coolCounter 변수는 새로 만든 object인 Counter 클래스 객체를 가리킴
        const coolCounter = new Counter();

        // 새로 만든 object에 있는 함수 호출
        // this.counter++ (1 증가)
        coolCounter.increase();
        // this.counter++ (1 증가)
        coolCounter.increase();
        // this.counter++ (1 증가)
        coolCounter.increase();
        // this.counter++ (1 증가)
        coolCounter.increase();
    }
    
    // 만약, 이런식으로 계속 counter가 증가하다가 counter의 값이 5의 배수가 될 때마다 알려주게 하려면? 
    
    if(false){
        // Counter 클래스안에 있는 increase() 함수 자체에서 알려주게 함
        // => 문제점. Counter 클래스 자체에서 알려주기 때문에 CoolCounter를 사용하는 소비자가 조절 불가능
        class Counter {
            constructor() {
                this.counter = 0;
            }

            increase() {
                this.counter++;
                console.log(this.counter);
                // if(this.counter % 5 === 0) console.log('5의 배수!');
                
                // 위 코드와 같음
                (this.counter % 5 === 0) && console.log('5의 배수!');
            }
        }

        const coolCounter = new Counter();

        coolCounter.increase();
        coolCounter.increase();
        coolCounter.increase();
        coolCounter.increase();
        coolCounter.increase();
        coolCounter.increase();
        coolCounter.increase();

    }    

    // 위 코드들 개선
    if(false){
        // Counter 클래스안에 있는 increase() 함수 자체에서 알려주게 함 + increase() 함수에 콜백 함수를 전달하여 알려줌
        class Counter {
            constructor() {
                this.counter = 0;
            }

            increase(runIf5Times) {
                this.counter++;
                console.log(this.counter);
                // if(this.counter % 5 === 0) runIf5Times();
                
                // 위 코드와 같음
                (this.counter % 5 === 0) && runIf5Times();      // 콜백함수 호출
            }
        }

        function printSomething() {
            console.log('5의 배수@');
        }

        const coolCounter = new Counter();

        // coolCounter가 increase 할 때마다 콜백함수 전달
        // 전달된 함수는 숫자가 5의 배수 일때만 호출됨
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);

    }    

    // 위 코드에서 숫자를 확인하고 싶을 때는
    if(false){
        // Counter 클래스안에 있는 increase() 함수 자체에서 알려주게 함 + increase() 함수에 콜백 함수를 전달하여 알려줌
        // runIf5Times(this.counter)로 전달하면 됨
        class Counter {
            constructor() {
                this.counter = 0;
            }

            increase(runIf5Times) {
                this.counter++;
                console.log(this.counter);
                // if(this.counter % 5 === 0) runIf5Times(this.counter);
                
                // 위 코드와 같음
                (this.counter % 5 === 0) && runIf5Times(this.counter);      // 콜백함수 호출
            }
        }

        function printSomething(num) {
            console.log(`5의 배수@ ${num}`);
        }
        function alertSomething(num) {
            alert(`5의 배수* ${num}`);
            
        }

        const coolCounter = new Counter();

        // coolCounter가 increase 할 때마다 콜백함수 전달
        // 전달된 함수는 숫자가 5의 배수 일때만 호출됨
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(alertSomething);

        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);

        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(printSomething);
        coolCounter.increase(alertSomething);

    }  


    // 이런 식으로 콜백 함수를 전달함으로써 원하는 기능 수행 가능
    // Counter 클래스 자체는 숫자가 5의 배수가 될 때마다 어떤 동작을 하는지 자체적으로 결정되어있지는 않음
    // 그렇기에 사용하는 사람이 원할 때 이러한 기능을 전달하게 되면 수행하게 됨
    

    // 위 코드 다시 개선. increase 함수를 호출할 때마다 기능을 전달하는게 불편함(평소에도 이렇게 사용 안 함)
    // 보통은 constructor()에서 콜백 함수를 받음
    if(true) {
        class Counter {

            // 이런 식으로 constructor에서 콜백함수를 받게 되면 constructor도 함수이기 때문에, 
            // 함수의 인자로 받아온 runEveryFiveTimes를 클래스 자체에서 기억을 해야 하므로 변수에 할당해야함
            constructor(runEveryFiveTimes) {
                this.counter = 0;
                // 인자를 받아왔기 때문에 추가
                this.callback = runEveryFiveTimes;
            }
            
            // increase()가 호출될 때마다 counter가 5의 배수가 되면 this.callback를 호출함
            // 호출할 때마다, this.counter 데이터를 전달해줌
            // this.callback은 결국 printSomething()을 가리키고 있기 때문에 printSomething()이 수행되게 됨
            increase() {
                this.counter++;
                console.log(this.counter);

                // if(this.counter % 5 === 0) this.callback(this.counter);
                // (this.counter % 5 === 0) && this.callback(this.counter);      // 콜백함수 호출


                // 클래스 객체 생성시 인자가 undefined인지 아닌지 확인 후에 호출해야 함
                // 즉, 사용자가 콜백함수를 등록했을 때만 호출
                if(this.counter % 5 === 0) {
                    if(this.callback) this.callback(this.counter);
                }

            }
        }
        // 이제는 Counter 클래스에 두가지의 데이터 타입이 들어가있음. (counter, callback)


        // counter를 만들 때 constructor에 원하는 콜백함수를 전달해줌
        // coolCounter라는 object는 Counter class 객체를 이용해서 object를 만들었는데, 
        // coolCounter는 Counter class와 동일하게 counter는 0부터 시작, callback은 printSomething을 가리킴

        const coolCounter = new Counter(printSomething);
        
        // Counter 클래스는 이 클래스를 만들 때, 콜백 함수를 하나 전달 받아야하는데,
        // 만약 콜백함수를 전달하지 않는다면, constructor()의 인자는 undefined가 됨. 
        // 즉 생성자 안에 있는 this.callback = undefined가 됨
        // const coolCounter = new Counter();


        // 그리고 기능 전달을 더는 하지 않아도 됨
        coolCounter.increase();
        coolCounter.increase();
        coolCounter.increase();
        coolCounter.increase();
        coolCounter.increase();
        coolCounter.increase();
        coolCounter.increase();



        function printSomething(num) {
            console.log(`5의 배수@ ${num}`);
        }
        function alertSomething(num) {
            alert(`5의 배수* ${num}`);
            
        }

    }

}