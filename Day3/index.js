const express=require('express');
const app = express();

app.use("/about/:id",(req,res)=>{
    console.log(req.params);
    res.send({name:"shanvi",age:21,mon:21});

})

app.use("/contact",(req,res)=>{
    res.send("this is my contact page");

})
app.use("/detail",(req,res)=>{
    res.send("this is the detail of my company");

})
app.listen(4000,()=>{
    console.log("hello everyone i am listening at port 4000");
})