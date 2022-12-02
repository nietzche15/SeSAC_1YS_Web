const mysql = require('mysql'); 

const cnn = mysql.createConnection({
    host : 'localhost', 
    user : 'user',
    password : '#hibiscuS15',
    database : 'hibiscus',
});

exports.get_visitor= (cb)=>{
    var sql = "SELECT * FROM visitor";

    cnn.query( sql, ( err, rows )=>{ 
        if (err) throw err;
    
        console.log('visitors :', rows);
        cb(rows);
    }); 
    /*
    query method는 시간이 오래 걸리기때문에 
    model에서 query까지 처리하고 값 return
    >> 비동기 순서 엉키지 않게 cb 이용하는 것
    */
}

exports.register_visitor = ( info, cb)=>{
    //info = req.body; {name: ~, comment: ~}
    var sql = `INSERT INTO visitor (name, comment) values ('${info.name}', '${info.comment}');`;

    cnn.query( sql, ( err, result )=>{ 
        if (err) throw err;
    
        console.log('insert result :', result);
        cb( result.insertId );
    }) 
}