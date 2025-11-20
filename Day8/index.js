 const express=require('express');
const app=express();
const main=require("./database");
const User=require('./models/users')
app.use(express.json());


app.post("/register", async(req,res)=>{
    try{
       await  User.create(req.body);
       res.send("User register succesfully");

    }
    catch(err){
        res.status(400).send("Error: "+err.message);

    }
})

app.get("/info", async(req,res)=>{
    try{
    const ans=await User.find({});
    res.send(ans);
    }
    catch(err){
        res.status(400).send("Error:"+err.message);
    }
})
app.get("/user/:id",async(req,res)=>{
    try{
        const result=await User.findById(req.params.id);
        res.send(result);

    }
    catch(err){
        res.send("Error:"+err.message());

    }
})

app.delete("/user/:id",async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.send("deleted successfully");

    }
    catch(err){
        res.send("Error: "+err.mesage());

    }
})
app.patch("/user",async(req,res)=>{
    try{
        const {_id,...update}=req.body;
        await User.findByIdAndUpdate(_id,update,{"runValidators":true});
        res.send("updated successfully");
    
    }
    catch(err){
        res.send("Error:"+err.message);
    }
})









main()
.then(async ()=>{console.log("connected to db")
app.listen(7500,()=>{
    console.log("i am listening at port 7500");
    
})
    // const result= await User.find({name:"Gudiya"});
    // console.log(result);
  
})
.catch((err)=>console.log(err));

