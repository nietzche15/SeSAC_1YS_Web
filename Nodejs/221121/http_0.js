const http = require('http');
const server = http.createServer();

server.on('request', (code)=>{
    console.log('Request Event');
})
server.on('connection', (code)=>{
    console.log('Connection Event');
})

server.listen(3000, () => {
    console.log('Port 3000 is connected');
})
