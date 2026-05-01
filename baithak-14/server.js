const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const productRoutes = require('/routes/product.routes');
const path = require('path');


mongoose.connect('mongodb+srv://arshjain2605_db_user:NTjgI9B6pdrTiZQ0@cluster0.ptp4zqm.mongodb.net/')
.then(() => {
    console.log("database chal gya");
})
.catch((err) => {
    console.log("nhi chla", err);
});

app.set('view engine', 'ejs')
app.set('view',Path2D.join(__dirname,'view'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//root route
app.get('/', (req, res) => {
    res.send("welcome my friend");
});
productRoutes(app) // 

//api for create
app.post('/api/product', (req,res)=>{

});

app.listen(PORT, () => {
    console.log(`server chal gya : ${PORT}`);
});

//mongodb+srv://arshjain2605_db_user:<db_password>@cluster0.ptp4zqm.mongodb.net/
//NTjgI9B6pdrTiZQ0
//arshjain2605_db_user