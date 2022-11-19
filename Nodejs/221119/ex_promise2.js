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
.then( function(user){
    console.log("user : ",user );
    return getVideo(user);})
.then( function(videos){
    console.log("videos : ", videos );
    return getDetail(videos);})
.then( function(msg){
    console.log("msg : ", msg );
});

/*
 바로 실행하면 pending 뜨기 때문에 
 값이 생긴 후 받아오도록
 return > then 으로 chain 한다
 */

