const fs = require("fs");
fs.readFile("./test.txt", function( err, data){
    if ( err ) throw err;

    console.log("data : ", String(data));
    // String(data) or data.toString()
});
// function( err, data ) { ~ } 부분이 callback 함수인 것

const fs2 = require("fs").promises; //promise형태 함수들 사용할 수 있음
fs2.readFile("./test.txt")
    .then((data)=>{
        console.log("promise - data : ", data.toString() );
    })

    /*
    var result = fs.readFile("./test.txt") 는 할 수 없음
    */

fs2.writeFile("./write.txt", 'sesac')
    .then(function(result){
        return fs2.readFile('./write.txt')
        })
        .then(function(data){
            console.log( data.toString());
    });
    //writeFile은 resolve값 보내지 x > 받을 필요 없다.

    fs.writeFile('./write2.txt', 'codingon', function( err ){
        if (err) throw err;
        console.log("writeFile success!");
        fs.readFile('./write2.txt', function( err, data){
            if (err) throw err;
            console.log("write2File data : ", data.toString());
        })
    });
