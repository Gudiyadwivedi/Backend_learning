const mongoose = require('mongoose');


async function main(){
  await mongoose.connect("mongodb+srv://dwivedigudiyaa:Gudiya%402002@codingadda.bqcflan.mongodb.net/UserData")
  // const userSchema = new Schema({
  //   name:String,
  //   age:Number,
  //   city:String,
  //   gender:String


  // })

  // const User=mongoose.model("user",userSchema);
  // const user1 = new User({name:"Gudiya",age:21,city:"kanpur",gender:"female"});
  // await user1.save();
  // await User.create({name:"shanvi",city:"delhi",age:30});
  // await User.insertMany([{name:"shalini",city:"goa",age:21},{name:"harsh",city:"kanpur",age:21,gender:"male"}]);
  // const ans=await User.find({});
  // console.log(ans);

  // const result=await User.find({name:"Gudiya"});
  // console.log(result);
 
}

module.exports=main;

