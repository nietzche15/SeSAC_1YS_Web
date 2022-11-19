// const Arr1 = require('./constructor_1');
// console.log( Arr1 );

const Arr1 = require('./constructor_1');
const { Fruits, Jam, Nothin } = Arr1;


console.log( Fruits );
console.log( Jam );
console.log( Nothin );

// const Fruits = Arr1.Fruits;
// const Jam = Arr1.Jam;
// const Nothin = Arr1.Nothin;
console.log("----------------------");

var fruit1 = new Fruits();
console.log( fruit1 );
console.log( fruit1.Color );
fruit1.color('red');
console.log( fruit1.sweet() );
console.log("----------------------");


var jam1 = new Jam('violet');
console.log( jam1 );
console.log( jam1.IsSticky );
jam1.IsJar();
console.log( jam1.sort );
console.log( jam1.returnSort() ); 
console.log("----------------------");


var nothin1 = new Nothin();
console.log( nothin1 );
console.log( nothin1.a );
console.log( nothin1.b );
console.log( nothin1.done() );
console.log("----------------------");
