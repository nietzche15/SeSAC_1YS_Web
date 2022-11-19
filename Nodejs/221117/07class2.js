const { Car } = require("./07class.js");
console.log( Car );

var Car1 = new Car('red');
console.log( Car1 );
console.log( Car1.returnColor() );
console.log( Car1.returnIsDoor() );

var Car2 = new Car('yellow');
console.log( Car2 );
console.log( Car2.returnColor() );
Car2.move();

var Car3 = new Car('blue');
console.log( Car3 );
console.log( Car3.returnColor() );
Car3.stop();

