const os = require("os");
const path = require("path");
const file = __filename;


console.log( "os.freemem : ", os.freemem() );
console.log( "os.totalmem : ", os.totalmem() );
console.log( "os.homedir : ", os.homedir() );
console.log( "----------------------------------------" );


console.log( "path.sep : ", path.sep );
console.log( "path.extname : ", path.extname(file) );
console.log( "path.parse : ", path.parse(file) );
console.log( "----------------------------------------" );

console.log( "path.basename : ", path.basename(file) );
console.log( "path.delimiter : ", path.delimiter );
console.log( "path.dirname : ", path.dirname(file) );
console.log( "path.isAbsolute : ", path.isAbsolute(file) );
