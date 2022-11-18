const result = require('./module_2.js');

console.log( result );
console.log( result() );
console.log( result.mul );

/*
module_2에서 mul()을 exports 한 경우 :
console.log( result() ); error 
> result is not a function

*/