const func1 = setTimeout( function(){
    console.log( "1.5초 후 실행" );
}, 1500);
// 익명함수 형태로 일회적 사용

// function a() {console.log("1.5초 후 실행");}
// setTimeout( a, 1500 ); 
// 상기 익명함수와 동일하게 동작하나 계속 memory 차지

const func2 = setInterval(() => {
    console.log("1초마다 반복");
},1000);

const func3 = setTimeout(() => {
    console.log("func3 실행");
}, 3000);

setTimeout(() => {
    clearTimeout(func3);
    clearInterval(func2);
}, 2500);

const func4 = setImmediate(() => {
    console.log("func4 즉시 실행");

});

const func5 = setImmediate(() => {
    console.log("func5 즉시 실행");
});
clearImmediate(func5);