const ProductModel = require('../model/ProductModel')

async function ProductServiceCreate(req,res){
    // try{
        
    // }catch(e){
    //     return {status:"fail", e}.toString()
    // }
}
const ProductGet = async() =>{
    try {
        let data = await ProductModel.find({})
        return { status: "Successfully you get all data", data:data};
      } catch (e) {
        return { status: "error", error: e.toString()};
      }
}
module.exports = {ProductGet}