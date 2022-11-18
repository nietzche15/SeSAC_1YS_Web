const apple1 = setTimeout( function(){
    console.log("2초 후 실행");
}, 2000);

const apple2 = setTimeout( function(){
    console.log("5초 후 실행");
}, 5000);

const apple3 = setInterval( function(){
    console.log("1초마다 실행");
}, 1000); 

const apple4 = setImmediate(()=>{
    console.log("apple4 즉시 실행")
});

const apple5 = setImmediate(()=>{
    console.log("apple5 즉시 실행행");
});

clearImmediate(apple4);

setTimeout(()=>{
    clearTimeout(apple2);
    clearInterval(apple3);
},3000);