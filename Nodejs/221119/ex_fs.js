const fs1 = require("fs").promises;

fs1.writeFile('./sesac.txt',"반갑습니다")
    .then(function(result){
        console.log("Done");
        return fs1.copyFile('./sesac.txt', './sesac2.txt')     
    }).then(function(result2){
        console.log("Done again");
        return fs1.rename('./sesac2.txt','./new.txt')   
    });

