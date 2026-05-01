const { readProduct, createProduct } = require("../controller/product.controller");



function productRoutes(app){
    //read
    app.get('/api/product',readProduct)
    //create
    app.post('/api/product' , createProduct)
}

module.exprots = productRoutes;