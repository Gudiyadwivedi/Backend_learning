const http=require('http');
const server=http.createServer((req,res)=>{
   if(req.url=="/home"){
    res.end("this is my home page");
   }
   else if(req.url=="/aboutus"){
    res.end("this is about page ");
   }
   else if(req.url=="/contact"){
    res.end("this is the contact page");
   }
   else{
    res.end("this is error");
   }
})

server.listen(4000,()=>{
    console.log("hello i am listening at port no  4000");
})