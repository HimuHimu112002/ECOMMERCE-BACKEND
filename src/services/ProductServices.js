const ProductModel = require('../model/ProductModel')
const CategoryModel = require('../model/CategoryModel');
const BrandModel = require('../model/BrandModel');
const ProductDetail = require('../model/ProductDetails')
const ProductSlideModel = require('../model/ProductSlideModel')

const ProductGet = async() =>{
    try {
        let data = await ProductModel.find({})
        return { status: "Successfully you get all data", data:data};
      } catch (e) {
        return { status: "error", error: e.toString()};
      }
}

const ProductCategoryList = async() =>{
  try {
      let data = await CategoryModel.find({})
      return { status: "Successfully you get all data", data:data};
    } catch (e){
      return { status: "error", error: e.toString()};
  }
}

const GetProductBrandList = async() =>{
  try {
      let data = await BrandModel.find({})
      return { status: "Successfully you get all data", data:data};
    } catch (e){
      return { status: "error", error: e.toString()};
  }
}

const GetProductDetails = async(req,res) =>{
  try {
      let data = await ProductDetail.find({}).populate("productID")
      return { status: "Successfully you get all data", data:data};
    } catch (e){
      return { status: "error", error: e.toString()};
  }
}

const GetProductSlide = async(req,res) =>{
  try{
    let data = await ProductSlideModel.find({}).populate("productID")
    return { status: "Successfully you get all data", data:data};
  }catch (e){
    return { status: "error", error: e.toString()};
  }
}

module.exports = {ProductGet,ProductCategoryList,GetProductBrandList,GetProductDetails,GetProductSlide}