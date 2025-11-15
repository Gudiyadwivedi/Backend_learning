const Auth=(req,res,next)=>{
    const token="ABCDEF";
    const Access=token=="ABCDEF"?1:0;
    if(!Access)
        res.send("Item is not exist");
    

    next();
}

module.exports={
    Auth,

}