const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const userRoutes = require('./routes/user.routes');
const verifyToken = require('./middleware/verify');



mongoose.connect('mongodb://127.0.0.1:27017/mistri') //promise
.then(()=>{
    console.log("DB CHAL GIYAA");
})
.catch((err)=>{
    console.log("DB nahi chala" , err);
})


app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json()) // for parsing application/json(here we recieve data in form of josn formet -> (java script object notation))
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form (data is in form of "form")
userRoutes(app);

userRoutes(app);

app.post('/api/product',verifyToken,(req,res)=>{

})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CHAL GYA AT PORT: ${PORT}`);
})