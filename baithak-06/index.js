const express = require('express');
const app = express();
const port = 8080;


app.get('/' ,(req,res)=>{  //http://localhost:8080/
    res.send({
        name:"arsh",
        class: "fa",
        roll: 19
    });
})

app.get('/attendence', (req,res)=>{
    res.send("get attendence lelo");
})

app.post('/news', (req,res)=>{
    res.send({
        news:"UGC ACT",
        des: "university grant commission act has fucked up the general bu implimenting this act",
        res:"roll back ugc"
    });
})

app.post('/attendence',(req,res)=>{
    res.send("welcome to post attendence");
})

app.listen(port, ()=>{
    console.log(`server is running at : ${port}`);
})