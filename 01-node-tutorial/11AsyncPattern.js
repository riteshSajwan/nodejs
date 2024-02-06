
const { readFile , writeFile } = require("fs").promises;

// const util = require('util')
// const readFilePromise = util.promisify(readFile)     //promisify is a util lib function 
// const writeFilePromise = util.promisify(writeFile)

const start = async()=>{ //using try catch
    try{
        // const first = await readFilePromise("./content/first.txt",'utf-8')
        // const second = await readFilePromise("./content/second.txt",'utf-8')
        const first = await readFile("./content/first.txt",'utf-8')
        const second = await readFile("./content/second.txt",'utf-8')
        await writeFile('./content/result-mind-granade.txt',`This is Awesome ${first} ${second}`,{flag:'a'})
        console.log(first,second)
    }
    catch(err){
        console.log(err)
    }
}

start();



// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path, "utf-8", (err, result) => {  
//             if (err) {
//             reject(err);
//             }
//             else{
//                 resolve(result)
//             }
//           }
//           )
//     })
// }

//converted readfile to promise to make it asynchronous

// getText("./content/first.txt").then((result)=>{  //using promises
//     console.log(result)
// }).catch((err)=>{
//     console.log(err)
// })





