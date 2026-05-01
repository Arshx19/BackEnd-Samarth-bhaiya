const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    },
    PId:{
        type:Number,
        required:true,
        unique:true
    }
});
const productModel = mongoose.model('product',productSchema)

module.exports = productModel;