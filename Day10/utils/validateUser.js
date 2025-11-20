const validator=require('validator');
function validateUser(data){
const mandatoryField=["firstName","emailId","age","password"];
        const isAllowed=mandatoryField.every((k)=>Object.keys(data).includes(k));
        if(!isAllowed)
            throw new Error("information missing");
        if(!validator.isEmail(data.emailId))
            throw new Error("invalid email");
        if(!validator.isStrongPassword(data.password))
            throw new Error("weak password");
}
module.exports=validateUser;