console.log( "__filename : " + __filename );
console.log( "__dirname : " + __dirname );
console.log( "----------------------------------------" );

/*
process object : 현재 실행 중인 노드 프로세스 정보
*/

console.log( "process.version : ", process.version );
console.log( "process.arch : ", process.arch );
console.log( "process.platform : ", process.platform );
console.log( "process.cpuUsage : ", process.cpuUsage() );
console.log( "----------------------------------------" );

/*
os module : 운영체제, 내장모듈
내장 모듈 < 이름만 적어도 찾아감
but 새로 만든, 직접 만든 모듈은 정확한 파일명 기재
*/

const os = require("os");
console.log( "os.type : ", os.type() );
console.log( "os.cpus : ", os.cpus() );
console.log( "os.homedir : ", os.homedir() );
console.log( "os.freemem : ", os.freemem() );
console.log( "----------------------------------------" );

/*
path module
*/

const path = require("path");
const file = __filename;
console.log( "path.extname : ", path.extname(file) );
console.log( "path.parse : ", path.parse(file) );



