const http = require('http');
const path = require('path');
const fs = require('fs').promises;

function sendFile(res, file) {
    const filename = path.join(__dirname, "", file);
    fs.readFile(filename).then(data => {
        res.end(data);
    }).catch(err => {
        console.log(err);
        res.statusCode = 404;
        res.end();
    });
}

const server = http.createServer((req, res) => {
    switch(req.url) {
        case "/":
            sendFile(res, "just.html");
            break;
        case "/nyc_night.webp":
            sendFile(res, "nyc_night.webp");
            break;
        default:
            res.statusCode = 404;
            res.end();
            break;
    }
});

server.listen( 3000, ()=>{
    console.log('Port 3000 is connected');
})