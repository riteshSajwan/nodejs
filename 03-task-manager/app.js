const express = require('express')
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const notFound = require('./middleware/notFound')
const errorHandlerMiddleWare = require('./middleware/errorHandler')

const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

//middleware

app.use(express.json()); //to get data in req.body

app.use(express.static('./public')) //to run front end
 

app.use('/api/v1/tasks',tasks)

app.use(notFound) //for 404
app.use(errorHandlerMiddleWare)


const start = async()=>{
    try{    
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log("Server listing at PORT 3000")
        })
    }catch(error){
        console.log(error);
    }
}

start();
