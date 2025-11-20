const mongoose = require('mongoose');
const {Schema}=mongoose;

const userSchema = new Schema({
   firstName:{
    type:String,
    required:true,
    minLength:3,
    maxLength:20
   },
   lastName:{
    type:String,
   },
   age:{
    type:Number,
    min:14,
    max:70
   },
   gender:{
    type:String,
   //  enum:["male","female","others"]
   validate(value){
      if(!["male","female","others"].includes(value))
         throw new Error("invalid gender")
   }
   },
   emailId:{
    type:String,
    unique:true,
    required:true,
    trim:true,
    lowercase:true,
    
   },
   password:{
    type:String
   },
   photo:{
    type:String,
    default:"This is the default photo"
   }

  },{timestamps:true})
  const User=mongoose.model("user",userSchema);

  module.exports=User;