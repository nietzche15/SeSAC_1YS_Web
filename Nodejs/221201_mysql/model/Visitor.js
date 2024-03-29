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
        if (err) throw err; //error 발생 시 처리, 아니면 rows에 data
    
        console.log('visitors :', rows);
        cb(rows);
    }); 
    /*
    query method는 시간이 오래 걸리기때문에 
    model에서 query까지 처리하고 값 return
    >> 비동기 순서 엉키지 않게 cb 이용하는 것
    */
}

exports.register_visitor = ( info, cb )=>{
    //info = req.body; {name: ~, comment: ~}
    var sql = `INSERT INTO visitor (name, comment) values ('${info.name}', '${info.comment}');`;

    cnn.query( sql, ( err, result )=>{ 
        if (err) throw err;
    
        console.log('insert result :', result);
        cb( result.insertId );
    }) 
}

exports.delete_visitor = ( id, cb )=>{
    var sql = `DELETE FROM visitor WHERE id=${id};`;

    cnn.query( sql, ( err, result )=>{
        if (err) throw err;

        console.log('delete result : ', result );
        cb();
    }) 
}

exports.get_visitor_by_id_model = ( id, cb )=>{
    var sql = `SELECT * FROM visitor WHERE id=${id};`;

    cnn.query( sql, ( err, rows )=>{ 
        if (err) throw err; 
    
        console.log('visitor_selected_by_id : ', rows);
        cb(rows[0]); // rows : array로 받아와짐
    }); 

}

exports.update_visitor = ( info, cb )=>{
    var sql = `UPDATE visitor SET name='${info.name}', comment='${info.comment}' WHERE id=${info.id};`;

    cnn.query( sql, (err, result)=>{
        if (err) throw err;

        console.log('update_visior : ', result);
        cb( );
    })
}