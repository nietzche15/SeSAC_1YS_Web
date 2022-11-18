function call( name ){
    return new Promise(( resolve, reject )=>{
        console.log("사용자는 " + name );
        console.log("시작은 call");
        setTimeout(()=>{ resolve( "back" )}, 2000)
    });
}
function back( a1 ){
    return new Promise(( resolve, reject )=>{
        console.log("두번째는 " + a1 );
        setTimeout(()=>{ resolve( "hell" )}, 1000)
    });
}
function hell( b1 ){
    return new Promise(( resolve, reject )=>{
        setTimeout(()=>{ resolve("세번째는 " + b1 )}, 500)
    });
}

call('kim')
.then(back)
.then(hell)
.then(console.log);