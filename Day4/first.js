const express=require('express');
const app=express();
app.use(express.json());
// this is routing
app.use("/user",(req,res,next)=>{
    // res.send("hello there!");
    console.log(`${Date.now()} ${req.method} ${req.url}`);
    next();
})
app.get("/user",(req,res)=>{
    res.send("getting the user information");
})

app.post("/user",(req,res)=>{
    res.send("i am saving the information");
})
app.delete("/user",(req,res)=>{
    res.send("i am deleting the infomation");

})

app.listen(5500,()=>{
    console.log("i am listening at port 5500");
})