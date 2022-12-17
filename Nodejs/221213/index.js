//dotenv=환경변수

console.log( process.env.PORT );
const dotenv = require( 'dotenv');
const path = require( 'path' );
dotenv.config(); // .env파일 찾음
dotenv.config({ path : ( './common.env' )});
dotenv.config({ path : path.join( __dirname, './common.env' )});

console.log( process.env.PORT );
console.log( process.env );


