//OS module
const os = require('os')

//info about current user
const user = os.userInfo();
console.log("user",user)

//method returns the system uptime in second
console.log(`The system uptime is ${os.uptime()} in sec`)

//
const currentOS = {
    name:os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);