// Streams  used to read and write

/* Writable 
Readable 
Duplex - Read and write
Transform - Modifying data with read and writing
*/

const {createReadStream}  = require('fs')

const stream = createReadStream('./content/big.txt',{highWaterMark:9000,encoding:'utf-8' })

stream.on('data',(result)=>{
    console.log(result)
})
stream.on('error',(err)=>{  //using error if path is not correct
    console.log(err)
})