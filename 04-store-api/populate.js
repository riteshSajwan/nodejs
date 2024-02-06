require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        await Product.deleteMany(); //to delete past products
        await Product.create(jsonProducts) //to post all products
        console.log("Success")
        process.exit(0)
    }catch(err){
        console.log("err",err)
        process.exit(1)
    }
}

start();