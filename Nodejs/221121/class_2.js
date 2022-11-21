//prototype 예약어 이용해서 class 외부에서 함수 추가하기

function Class(msg){
    this.name = 'I am Class';
    this.message = msg;

    message2 = 'Find me ! ';
}

Class.prototype.getMessage = function(){
    return this.message;
}

Class.prototype.getMessage2 = function(){
    return this.message2;
}
// this 로  선언되지 않은 변수는 외부(prototype으로 추가한 함수)에서 참조 불가
//undefined

var myClass = new Class('Hello World ! ');
console.log( myClass.getMessage() );
console.log( myClass.getMessage2() );

