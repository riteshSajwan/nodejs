//event loop
/* The event loop is what allow Node.js to perform non-blocking I/O operations - despite the fact that js is single threaded - by offloading operations to the sustem kernel whenever possible
*/

// console.log("first task")
// setTimeout(()=>{
//     console.log("Last")
// },0)
// console.log("Second")

// const { readFile } = require("fs");
// console.log("starting first task")

// readFile("./content/first.txt", "utf-8", (err, result) => {  //callback is asynchronous
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result)
//   console.log("completed task")
// }
// )
// console.log("Starting new task")

// setInterval(() => {
//     console.log("Hello")
// }, 2000);

// console.log("Run First")

//HTTP module with event loop
const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req)
    if(req.url==='/'){
        res.end("Welcome to home page")
    }
    if(req.url==='/about'){
        // Blocking code will block code for all the page
        for(let i=0;i<1000;i++){
            for(let j=0;j<1000;j++){
                console.log("blocking code")
            }
        }
        res.end("Welcome to about page")
    }
   
    // res.write("Welcome to the page")
    res.end(`
        <h1> Oops</h2>
        <p> page not found </p>
        <a href='/'> back Home </a>
    `);
})

server.listen(5000,()=>{
    console.log("Server listing to 5000")
});