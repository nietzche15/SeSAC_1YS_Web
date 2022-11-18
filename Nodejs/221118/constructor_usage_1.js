const { Fruits, Jam, Nothin } = require('./constructor_1');
const  Arr1  = { Fruits, Jam, Nothin };
console.log( Arr1 );

var fruit1 = new Fruits();
console.log( fruit1 );
console.log( fruit1.Color );
console.log( fruit1.color('red') );
console.log( fruit1.sweet() );
console.log("----------------------");


var jam1 = new Jam('violet');
console.log( jam1 );
console.log( jam1.IsSticky );
console.log( jam1.IsJar() );
console.log( jam1.sort );
console.log( jam.returnSort() ); 
console.log("----------------------");


var nothin1 = new Nothin();
console.log( nothin1 );
console.log( nothin1.a );
console.log( nothin1.b );
console.log( nothin1.done() );
