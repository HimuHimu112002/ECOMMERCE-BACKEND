const EmailSend = require('../utility/EmailTampler');
const UserModel = require("../model/UserModel")

async function UserLogin(req, res){
    try{

        const {email} = req.body;
        // if(!email){
        //     res.send({error: "Please Enter Your Email"})
        // }else{
        //     let duplicateEmail = await UserModel.find({email: email})
        //     if(duplicateEmail.length > 0){
        //         return res.send({error: "This email already in used. Try another email"})
        //     }
        //     let code=Math.floor(100000+Math.random()*900000);
        //     let user = new UserModel({
        //         email: email,
        //         otp:code
        //     })
        //     user.save()
        //     EmailSend(email, code)
        //     res.send({success: "Registration Successfull Thank You"})
        // }
        
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
                return res.send({success: "Check your email and provide otp code"})
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
        //else{
        //     let user = new UserModel({
        //         email: email,
        //         otp:code
        //     })
        //     user.save()
        //     EmailSend(email, code)
        //     res.send({success: "Registration Successfull Thank You"})
        // }
    
        // await EmailSend(email,code)
        // await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert:true})
        //return {status:"success", message:"6 Digit OTP has been send"}
    }catch(e){
        return {status:"fail", message:"Something Went Wrong",e}
    }
    
}
// exports.VerifyLogin = async(req, res)=>{

// }
// exports.UserLogout = async(req, res)=>{

// }
// exports.CreateProfile = async(req, res)=>{

// }
// exports.UpdateProfile = async(req, res)=>{

// }
// exports.ReadProfile = async(req, res)=>{

// }

module.exports = {UserLogin};