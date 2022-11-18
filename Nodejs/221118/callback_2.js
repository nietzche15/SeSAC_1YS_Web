function func1( a, cb ){
    setTimeout( function(){
        console.log(a);
        cb( a*2 );
    }, 500)
}
function func2( b, cb ){
    setTimeout( function(){
        console.log(b);
        cb( b*2 );
    }, 500)
}
function func3( c, cb ){
    setTimeout( function(){
        console.log(c);
        cb( c*2 );
    }, 500)
}

func1( 1, function(x){
    func2( x, function(y){
        func3( y, function(z){
            console.log(z);
        });
    });
});
