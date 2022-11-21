// 함수로 class 선언

function Class(msg) {
    this.name = "I am Class";
    this.message = msg;

    message2 ='find me!';

    this.print = function(){
        console.log(message2);
    };
}

// obj 생성 ( 함수도 new 연산자로 초기화해 객체처럼 사용가능해짐)

var myClass = new Class('Hello World!');
console.log(myClass.name);
console.log(myClass.message);
// this 사용한 변수만 외부에서 참조 가능 > message2는 참조 불가
myClass.print(); 
// print()는 console.log 하는게 역할이기떄문에 console.log에 넣으면 undefined 출력력