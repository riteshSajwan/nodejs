require('dotenv').config();
require('express-async-errors')

const express = require('express')
const app = express();

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const productRouter = require('./routes/products')

app.use(express.json())
const port = process.env.PORT||3000


app.get('/',(res,req)=>{
    res.send(`<h1>Store API</h1> <a href="/api/v1/products>Products Route</a>`)
})

app.use('/api/v1/products',productRouter)

app.use(notFoundMiddleware);

app.use(errorMiddleware);

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port,console.log(`Server Listing to port ${port}`));
    }catch(err){
        console.log("err",err)
    }
}

start();