function login( id, pw ){
    return new Promise(( resolve, reject)=>{
        console.log("User signed in.");
        setTimeout(()=>{ resolve(id) }, 3000)
    });
}
function getVideo( id ){
    return new Promise(( resolve, reject )=>{
        console.log( id + "'s video collection");
        setTimeout(()=>{ resolve(['Avatar', 'La La Land']) }, 2000)
    });    
}
function getDetail( videos ){
    return new Promise(( resolve, reject )=>{
        setTimeout(()=>{ resolve(" Title of the video : " + videos[0]) }, 1000)
    });
}

login('kim')
.then(getVideo)
.then(getDetail)
.then(console.log);
