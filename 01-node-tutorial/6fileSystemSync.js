const {readFileSync, writeFileSync} = require('fs')

console.log("start")
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/result.txt',`Here is the result of ${first}, ${second}`,{flag:'a'})  //without flag values gets append else replaced
console.log("Done with the task")
console.log("starting with next one")

