const express = require('express');
const app = express();
const port = 8080;

app.get('ars/',(req,res)=>{
    res.send("welcome");
})

app.listen(port, ()=>{
    console.log('server running at {port}');})