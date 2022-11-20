const http = require("http");
const fs = require("fs").promises;

const server = http.createServer( ( req, res ) =>{
        fs.readFile('./just.html')
        .then( (data)=> { 
        console.log("html loaded");
        res.end( data.toString() );
    })
});

server.on('request', (req, res) => {
    fs.readFile('./nyc_night.webp')
    .then((data)=>{ 
        res.writeHead( 200, {'Content-Type' : 'image/webp'});
        console.log("image loaded");
        res.end(data);
    })
});

server.listen( 8080, function(){
    console.log("Port 8080 connected");
});