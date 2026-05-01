const express = require('express');  //fn
const app = express(); // obj

const port =8000;
//root route = "/ default method = GET"
app.get('/',(req,res)=>{
    res.send("welcome to root")
})


app.get('/blog', (req,res)=>{
    res.send({
        name:"arsh",
        des:"in backend class"
    })
})



app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})