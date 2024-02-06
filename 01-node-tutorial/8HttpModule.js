//HTTP module
const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req)
    if(req.url==='/'){
        res.end("Welcome to home page")
    }
    if(req.url==='/about'){
        res.end("Welcome to about page")
    }
   
    // res.write("Welcome to the page")
    res.end(`
        <h1> Oops</h2>
        <p> page not found </p>
        <a href='/'> back Home </a>
    `);
})

server.listen(5000);