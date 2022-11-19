const prompt = require('prompt-sync')();
const name = prompt("What is your least favorite fruit? ");

function fruits( fruit1, fruit2, nt ){
    setTimeout( function(){
        console.log( "1st place : " + fruit1 );
        nt( fruit2 );
    },1000)
}
function secondFruit( secFruit, nt ){
    setTimeout( function(){
        console.log( "2nd place : " + secFruit );
        nt( `${name}` );
    },1000)
}
function hateFruit( hateFruit, nt ){
    setTimeout( function(){
        nt( "least favorite fruit : " + hateFruit );
    },1000)
    
}

fruits('WATERMELON', 'Shine Muscat', function( f1 ){
    secondFruit( f1, function( f2 ){
        hateFruit( f2, function( f3 ){
            console.log( f3 );
        });
    });
});