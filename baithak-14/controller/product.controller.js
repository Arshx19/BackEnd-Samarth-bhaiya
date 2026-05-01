const productModel = require("../model/Product.model");

async function readProduct(req,res){
    try{
      let allProducts = await productModel.find({}); // promise
        res.status(200).json(allProducts);
    }
    catch(err){
        return res.status(400).json({msg:err.message});
    }
}


async function createProduct(req,res){
    try{
        let {name,price,img,des,PId} = req.body;
        let newProduct = await productModel.create({name,price,img,des,PId}); // promise 
        return res.status(201).json(newProduct);
    }
    catch(err){
        return res.status(400).json({msg: err.message});
    }
}


module.exports = {createProduct,readProduct};