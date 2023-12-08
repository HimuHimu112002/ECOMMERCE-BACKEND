const BrandModel = require('../model/BrandModel')
const ProductModel = require('../model/ProductModel')
const { ProductCategoryList, GetProductBrandList } = require("../services/ProductServices")

async function CreateBrandList(req, res) {
    const {brandName,brandImg,brandid} = req.body
    let brand = new BrandModel({
        brandName,
        brandImg,
        brandid
    })   
    brand.save()
    await ProductModel.findOneAndUpdate({_id: brand.brandid}, {$push:{brandID:brand._id}}, {new: true})
    res.send({success: "Caterory Brand list Successfully"})
    
}

async function GetAllBrandList(req, res) {
    let result = await GetProductBrandList()
    return res.status(200).json(result)
    
}
module.exports = {CreateBrandList,GetAllBrandList}