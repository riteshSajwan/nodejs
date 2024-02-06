// How server can use event

const http = require('http')

const server = http.createServer();

server.on('request',(req,res)=>{  //using on emit an event
    res.end("Welcome to server using Even")
})

server.listen(5000)