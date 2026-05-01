const express = require('express');
const app =express();
const mongoose = require('mongoose');
const path = require('path');
const userRoutes = require('./Routes/user.Routes');

mongoose.connect('mongodb://127.0.0.1:27017/mistri')
.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log("db not connected", err)
})

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine', 'ejs')
app.set('views' , path.join(__dirname,'views'))

app.use(express.json()); //for  parsing application/json
app.use(express.urlencoded()); // form data action


userRoutes(app);

const PORT =5000;
app.listen(PORT, ()=>{
    console.log(`server is running at ${PORT}`);
    
})