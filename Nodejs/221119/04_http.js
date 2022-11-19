const http = require('http');
const fs = require("fs").promises;


const server = http.createServer( function(req, res){
    // res.write("<h1>Hello World</h1>");
    // res.end("<hr>");
    fs.readFile('./test.html')
    .then(function(data){
        res.end( data.toString() );
    })






}); //서버 여는 객체

/*client 실행시 function 실행 
첫번째 인자 client의 요청
두번째 인자 server의 응답
*/

/*
server.on() event 등록 함수
server.listen()  서버 실행, client 기다림
*/

server.listen(8080, function(){
    console.log('8080번 포트로 실행');
});


