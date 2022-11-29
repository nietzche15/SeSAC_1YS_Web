const mysql = require('mysql');

const cnn = mysql.createConnection({
    host : 'localhost', 
    user : 'user', //mysql user id 
    password : '#hibiscuS15',
    database : 'hibiscus',
});

cnn.query("select * from user", ( err, result )=>{ //cb함수
    // 처음엔 err = undefined; error발생시 값 생김(==true) 
    if (err) throw err;
    // throw error 내에 console.log(err) 포함되어있음

    console.log(result);

});