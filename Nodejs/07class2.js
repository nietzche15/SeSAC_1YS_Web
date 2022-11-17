const { Car } = require("./07class.js");
console.log( Car );

var Car1 = new Car('red');
console.log( Car1.returnColor() );
var Car2 = new Car('yellow');
console.log( Car2.returnColor() );
var Car3 = new Car('blue');
console.log( Car3.returnColor() );
