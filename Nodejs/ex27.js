// function call(name) {
//     console.log("사용자는 " + name);
//     return "call";
// }
// function back() {
//     return "back";
// }
// function hell() {
//     return "hell";
// }

// let a = call('kim');
// console.log( "시작은 " + a);
// let b = back();
// console.log( "두번째는 " + b );
// let c = hell();
// console.log( "세번째는 " + c);

function call( name, cb) {
    setTimeout(function(){
        console.log("사용자는 " + name);
        console.log("시작은 call");
        cb( "back" );
    }, 2000)    
}
function back( a1, cb) {
    setTimeout(function(){
        console.log("두번째는 " + a1 );
        cb( "hell" );
    }, 1000);   
}
function hell(b1, cb) {
    setTimeout(function(){
        cb( "세번째는 " + b1 );
    }, 500)
}

call('kim', function(a){
    back(a, function(b){
        hell(b, function(c){
            console.log(c);
        });
    });
});