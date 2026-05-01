const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

const PORT = 8000;
const allblogs = [
    {
    name : "Batman",
    creater: "DC comic"
    },
    {
    name : "Iron man",
    creater : "Marvel"
    }
]

app.get('/blogs' , (req,res)=>{
    res.render('index',{allblogs})
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})