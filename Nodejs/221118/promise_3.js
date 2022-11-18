function func1(a){
    return new Promise(( resolve, reject)=>{
        console.log(a);
        setTimeout(()=>{ resolve(a*2)}, 1000)
    });
};
function func2(b){
    return new Promise(( resolve, reject)=>{
        console.log(b);
        setTimeout(()=>{ resolve(b*2)}, 1000)
    });
};
function func3(c){
    return new Promise(( resolve, reject)=>{
        console.log(c);
        setTimeout(()=>{ resolve(c*2)}, 1000)
    });
};

func1(1)
.then(func2)
.then(func3)
.then(console.log);