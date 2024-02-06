const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Product name must be provided']
    },
    price:{
        type:Number,
        required:[true,'Product price must be provided']
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['Company1','Company2','Company3','Company4'],
            message:'{VALUE} is not supported'
        }
        // enum:['Company1','Company2','Company3']
    }
})

module.exports = mongoose.model('Product',productSchema)