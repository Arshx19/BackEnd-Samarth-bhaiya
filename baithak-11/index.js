const { log } = require('console');
const express = require('express');
const app= express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public'))); // middleware
app.use(express.urlencoded({extended:true})); // body parsing middleware
const PORT =8080;

const allBlogs = [{id:1,blog:"superman",author : "mav"},
                {id:2,blog:"spiderman", author :"stan"},
                {id:3,blog:"shatkiman", author : "gangadhar"}
]


app.get("/blogs",(req,res)=>{
    res.render('index', {allBlogs})
})

app.get("/blog/new",(req,res)=>{
    res.render('new');
})

app.post("/blogs",(req,res)=>{
    let {blog,author} = req.body;
    // res.render('create');
    allBlogs.push({id:allBlogs.length+1,blog,author})    
    res.redirect("/blogs");
})

app.get('/blogs/:idd',(req,res)=>{
    // console.log(req.params);
    let {idd} = req.params;
    console.log(idd,typeof(idd));
    let foundblog = allBlogs.find((item)=>item.id === parseInt(idd));
    res.render('show',{foundblog});
    
    
})

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
    console.log("http://localhost:8080/blogs");
    
})
