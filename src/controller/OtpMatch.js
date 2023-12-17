const UserModel = require("../model/UserModel");
const { EncodeToken } = require("../utility/TokenHelper");
//const EncodeToken = require('../utility/TokenHelper')
let OtpMatchController = async (req, res)=>{
    let {otp} = req.body
    let email = req.params.email;
    let OtpMatchFind = await UserModel.find({email})

    if(OtpMatchFind.length > 0){
        if(otp == OtpMatchFind[0].otp){
            let user_id=await UserModel.find({email:email,otp:otp}).select('_id');
            
            // User Token Create
            let token=EncodeToken(email,user_id[0]['_id'].toString())

            // OTP Code Update To 0
            //await UserModel.updateOne({email:email},{$set:{otp:"0"}})

            // set cookie
            //let cookieOptin = {expires:new Date(Date.now()+24*6060*1000), httpOnly:false}
            res.cookie('token',token)

            res.json({status:"success", message:"Valid Otp Login Successfull",token})
        }else{
            res.json({status: "fail", message: "Invalid Otp try again"})

        }
    }
}

const UserLogout = async(req, res)=>{
    let cookieOptin = {expires:new Date(Date.now()-24*6060*1000), httpOnly:false}
    res.cookie('token',cookieOptin)
    res.send({status: "success"})
}
module.exports = {OtpMatchController,UserLogout}