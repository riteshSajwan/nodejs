//HTTP streams

var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    // const text = fs.readFileSync('./content/big.txt','utf-8') //for big file this req would be too large we need to divide into chunks
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt','utf-8')
    fileStream.on('open',()=>{
        fileStream.pipe(res) //piping into writable stream and breaking req into chunks as Transfer-Encoding:chunked
    })

    fileStream.on('error',(err)=>{
        console.log(err)
    })

}).listen(5000,()=>{
    console.log("server running")
})