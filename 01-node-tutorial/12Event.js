// Events 
// Event driven programming

const EventEmitter = require('events')

const customEmitter = new EventEmitter(); //instance/method of class

customEmitter.on('response',()=>{ //can have multiple function
    console.log(`data received`)
})
customEmitter.on('response',(name,id)=>{ 
    console.log(`data ${name} and id ${id}`)
})

customEmitter.emit('response',) //order matters
customEmitter.emit('response','john',12) //order matters

