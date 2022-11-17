const num = require('./module01.js');
// { a=1, b=3 };

// 구조분해 >> const { a, b } = require('./module01.js');

const a = num.a;
const b = num.b;

function add(){
    return a+b;
}

module.exports = add;
// module.exports = {add];}
//result = { add : Function(){return a+b;}}
//result() 는 X < result가 func이 아니라서