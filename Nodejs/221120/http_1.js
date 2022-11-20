const { setServers } = require("dns");
const http = require("http");
const fs = require("fs").promises;

const server = http.createServer( ( req, res ) =>{
    fs.readFile('./string_int_.html')
    .then( (data)=> { res.end( data.toString());})
});

server.listen( 8080, function(){
    console.log("Port 8080 connected");
})