const express = require('express');
const router = express.Router();

const {ProductCreate,GetAllProduct,ProductBrandList,ProductSliderList,ProductListByBrand,ProductListByCategory,ProductListBySimiler,ProductListByKeyword,ProductListByRemark,ProductDetails,ProductReview} = require('../controller/ProductController')

const {CreateCategory,GetCategoryList} = require('../controller/CategoryController')

const {CreateBrandList,GetAllBrandList} = require('../controller/BrandController')

router.post('/ProductCreate',ProductCreate)
router.get('/GetAllProduct',GetAllProduct)

router.post('/CreateCategory',CreateCategory)
router.get('/GetAllProductCategoryList',GetCategoryList)

router.post('/CreateBrandList',CreateBrandList)
router.get('/GetProductBrandList',GetAllBrandList)

router.get('/ProductSliderList',ProductSliderList)
router.get('/ProductListByBrand/:BrangID',ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID',ProductListByCategory)
router.get('/ProductListBySimiler/:KeywordID',ProductListBySimiler)
router.get('/ProductListByKeyword/:KeywordID',ProductListByKeyword)
router.get('/ProductListByRemark/:RemarkID',ProductListByRemark)
router.get('/ProductDetails/:ProductID',ProductDetails)
router.get('/ProductReview/:ProductID',ProductReview)

module.exports = router