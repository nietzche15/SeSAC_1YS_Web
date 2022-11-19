/*
new Promise(function(resolve, reject){
    //...
});
*/

function func1(){
    return new Promise( function (resolve, reject) {
        resolve("성공");
    });
}
function func2(){
    return new Promise( function (resolve, reject) {
        setTimeout(function(){ resolve("성공");}, 1000)
    });
}
var a = func1();
console.log(a);
var b = func2();
console.log(b); //promise 아직 안 끝난 상태에서 받아와 pending이 뜸


func1()
.then(function(result){
    console.log("result1 : ", result );
    return 'a';
}).then(function(abc){
    console.log("abc : ", abc);
});

func2()
.then(function(result){
    console.log("result2 : ", result );
});






