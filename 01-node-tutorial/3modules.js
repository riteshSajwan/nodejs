//CommonJS every file is module (By default) 
// Modules - Encapsulated code (only share minimum)

const {john, peter} = require('./3.1name')
const sayHI = require('./3.2function')
// console.log("name",name)
// console.log("sayHI",sayHI)

const data  = require("./3.2alternativeModule")
console.log("data",data)

sayHI(john)
sayHI("ritesh");