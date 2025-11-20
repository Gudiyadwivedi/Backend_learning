 const express=require('express');
const app=express();
const main=require("./database");
const User=require('./models/users')
app.use(express.json());

app.get('/info',async (req,res)=>{
    const ans=await User.find({});
    res.send(ans);
})

app.post('/info',async(req,res)=>{
    // const ans=new User(req.body);
    // await ans.save();
try{
    await User.create(req.body);
    res.send("successfully updated");
}
catch(err){
    res.status(400).send("Error: "+err);
}
    
})

app.delete('/info',async(req,res)=>{
    await User.deleteOne({name:"katrina"});
    res.send("information deleted");
})
app.put('/info',async(req,res)=>{
    await User.updateOne({name:'rhea'},{name:"shreya",age:46,city:"delhi"});
    res.send("updated successully");


})



main()
.then(async ()=>{console.log("connected to db")
app.listen(6500,()=>{
    console.log("i am listening at port 6500");
    
})
    // const result= await User.find({name:"Gudiya"});
    // console.log(result);
  
})
.catch((err)=>console.log(err));

