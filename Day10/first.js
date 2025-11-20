const bcrypt=require('bcrypt');
const password="shanvi@123"
async function hashing(){
const hashpass=await bcrypt.hash(password,10);
console.log(hashpass);
}
hashing();