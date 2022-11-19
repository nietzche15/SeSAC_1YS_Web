/*
new Promise(function(resolve, reject){
    // resolve : 함수형태, 성공했을때 실행할 part
    // reject : 함수형태, 실패 or 에러를 처리할 때 실행할 part
});
*/

function func3(flag){
    return new Promise( function (resolve, reject) {
        if (flag) {
            resolve("flag는 true");
        } else {
            reject("flag는 false");
        }
    });
}
/*
func3(true).then(
function(msg){
        console.log("msg1 : ", msg ); //resolve
    },
    function(msg){
        console.log("msg2 : ", msg ); //reject
    }
);
*/
func3(true)
.then(function(msg){
            console.log("msg1 : ", msg ); //resolve
        }
).catch(function(msg){
            console.log("msg2 : ", msg ); //reject
        }
);




