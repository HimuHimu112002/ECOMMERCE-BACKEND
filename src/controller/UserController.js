const EmailSend = require('../utility/EmailTampler');
const UserModel = require("../model/UserModel")

async function UserLogin(req, res){
    try{

        const {email} = req.body;
        
        if(!email){
            res.send({error: "Please Enter Your Email"})
        }else{
            let duplicateEmail = await UserModel.find({email: email})
            if(duplicateEmail.length > 0){
                let code=Math.floor(100000+Math.random()*900000);
                await UserModel.findOneAndUpdate(
                    {email},
                    {$set: {otp:code}},
                    {new: true}     
                )
                EmailSend(email, code)
                return res.send({success: "Check your email you have recived otp code"})
            }else{
                let code=Math.floor(100000+Math.random()*900000);
                let user = new UserModel({
                    email: email,
                    otp:code
                })
                user.save()
                EmailSend(email, code)
                res.send({success: "Registration Successfull Thank You"})
            }
            
        }
    }catch(e){
        return {status:"fail", message:"Something Went Wrong",e}
    }
    
}
module.exports = {UserLogin};