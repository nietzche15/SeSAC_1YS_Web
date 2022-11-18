// const num = require('./module_1.js');
// console.log( num );

// const x = num.a;
// const y = num.b;
// const z = num.c;
const { a, b, c } = require('./module_1.js');

console.log( a );
console.log( b );
console.log( c );

function mul(){
    return a*b*c;
}

module.exports = mul;
