const http = require('http');
const fs = require('fs').promises;
const server = http.createServer(( req, res )=>{
    res.writeHead( 200, {'Content-Type':'text/html'});
    
    res.end('<h1>Hello World</h1>');
}).listen( 3000, () => {
    console.log( 'Port 3000 is connected');
})