const mysql = require('mysql'); 

const cnn = mysql.createConnection({
    host : 'localhost', 
    user : 'user',
    password : '#hibiscuS15',
    database : 'hibiscus',
});

exports.idCheck_model = (id, cb)=>{
    var sql = `SELECT * FROM user2 WHERE id='${id}';`;

    cnn.query( sql, ( err, rows )=>{ 
        if (err) throw err; 

        console.log('rows :', rows);

        if ( rows.length < 1) { cb(false); } 
        else { cb(true); }

    }); 
}

exports.signUp_model = ( info , cb)=>{
    var sql = `INSERT INTO user2 (id, pw, name ) VALUES( '${info.id}', '${info.pw}', '${info.name}' );`;

    cnn.query( sql, ( err, result )=>{ 
        if (err) throw err; 

        console.log('result :', result);

        cb(result);
    }); 
}


exports.signIn_model = ( info , cb)=>{
    var sql = `SELECT pw FROM user2 WHERE id='${info.id}';`;

    cnn.query( sql, ( err, result )=>{ 
        if (err) throw err; 

        console.log('result :', result);

        cb(result);
    }); 
}

exports.deleteInfo_model = ( info, cb )=>{
    var sql = `DELETE FROM user2 WHERE id='${info.id};'`;

    cnn.query( sql, ( err, result )=>{
        if (err) throw err;

        console.log('delete result : ', result );
        cb();
    })
}
