//local dependency
// npm i <packagename>

//global dependency
//npm i -g <packagename>

//development dependency
//npm i <packagename> -D

//package.json - manifest file (stores important info about project/package)
//manual approach (create package.json in the root , create properties)
//npm init (step by step , enter to skip)
//npm init -y (everything as default)

const _ = require('lodash')
const item = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(item)
console.log(newItems);