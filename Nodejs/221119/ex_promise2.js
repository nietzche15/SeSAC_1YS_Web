function login( id, pw){
    return new Promise( function ( resolve, reject ){
        setTimeout( function(){
            console.log( "사용자 입장" );
            resolve(id);
        }, 3000);
    })
};
function getVideo( id ){
    return new Promise( function( resolve, reject){
        setTimeout( function(){
            console.log(id +"의 비디오 리스트");
            resolve(['Avator','La La Land']);
        }, 2000)
    })
};
function getDetail( video) {
    return new Promise( function( resolve, reject){
        setTimeout( function(){
            resolve("비디오 제목 : " + video[0] );
        }, 1000)
    })
};

login( 'kim', '1234')
.then( function(user){} )
.then( function(videos){} )
.then(console.log);
