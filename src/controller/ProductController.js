const {ProductServiceCreate,ProductGet} = require('../services/ProductServices')
const ProductModel = require('../model/ProductModel')
async function  ProductCreate(req,res) {
    const {title,shortDes,price,discount,discountPrice,star,stock,remark} = req.body
    let product = new ProductModel({
        title,
        shortDes,
        price,
        discount,
        discountPrice,
        star,
        stock,
        remark,
    })   
    product.save()
    res.send({success: "Product Created Successfully done"}) 
    
}
async function  ProductBrandList(req, res) {
    let result = await ProductGet()
    return res.status(200).json(result)
}
async function  ProductCategoryList(req, res) {
    
}
async function  ProductSliderList(req, res) {
    
}
async function  ProductListByBrang(req, res) {
    
}
async function  ProductListByCategory(req, res) {
    
}
async function  ProductListBySimiler(req, res) {
    
}
async function  ProductListByKeyword(req, res) {
    
}
async function  ProductListByRemark(req, res) {
    
}
async function  ProductDetails(req, res) {
    
}
async function  ProductReview(req, res) {
    
}

module.exports = {ProductCreate,ProductBrandList,ProductCategoryList,ProductSliderList,ProductListByBrang,ProductListByCategory,ProductListBySimiler,ProductListByKeyword,ProductListByRemark,ProductDetails,ProductReview}