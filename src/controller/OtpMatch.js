const UserModel = require("../model/UserModel")

let OtpMatchController = async (req, res)=>{
    let {otp} = req.body
    let email = req.params.email;
    let OtpMatchFind = await UserModel.find({email})

    if(OtpMatchFind.length > 0){
        if(otp == OtpMatchFind[0].otp){
            await UserModel.findOneAndUpdate(
                {email},
                {$unset: {otp:""}},
                {new: true}
                        
            )
            res.json({success: "Otp Matching Login Successfull"})
        }else{
            res.json({error: "Otp not matching"})

        }
    }
}
module.exports = {OtpMatchController}