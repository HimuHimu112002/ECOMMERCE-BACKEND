const {ProductGet,GetProductDetails} = require('../services/ProductServices')
const ProductModel = require('../model/ProductModel')
const ProductDetails = require('../model/ProductDetails')

async function  ProductCreate(req,res){
    const {title,shortDes,price,discount,discountPrice,image,star,stock,remark} = req.body
    let product = new ProductModel({
        title,
        shortDes,
        price,
        discount,
        discountPrice,
        image,
        star,
        stock,
        remark,
    })   
    product.save()
    res.send({success: "Product Created Successfully done"}) 
    
}

async function  GetAllProduct(req,res){
    let result = await ProductGet()
    return res.status(200).json(result)
}

async function  ProductDiscription(req, res){
    const {img1,img2,img3,img4,img5,description,color,size,productID} = req.body
    let productDis = new ProductDetails({
        img1,
        img2,
        img3,
        img4,
        img5,
        description,
        color,
        size,
        productID
    })   
    productDis.save()
    await ProductModel.findOneAndUpdate({_id: productDis.productID}, {$push:{productID:productDis._id}}, {new: true})
    res.send({success: "Productdetail Created Successfully"}) 
}

async function GetDiscription(req, res){
    let result = await GetProductDetails()
    return res.status(200).json(result)
    
}


async function  ProductSliderList(req, res) {
    
}

async function  ProductListByBrand(req, res) {
    
}

async function  ProductListByCategory(req, res) {
    
}

async function  ProductListBySimiler(req, res) {
    
}

async function  ProductListByKeyword(req, res) {
    
}

async function  ProductListByRemark(req, res) {
    
}

module.exports = {ProductCreate,GetAllProduct,ProductSliderList,ProductListByBrand,ProductListByCategory,ProductListBySimiler,ProductListByKeyword,ProductListByRemark,GetDiscription,ProductDiscription}