const express = require('express');
const router = express.Router();

const {ProductCreate,ProductBrandList,ProductCategoryList,ProductSliderList,ProductListByBrang,ProductListByCategory,ProductListBySimiler,ProductListByKeyword,ProductListByRemark,ProductDetails,ProductReview} = require('../controller/ProductController')

router.post('/ProductCreate',ProductCreate)
router.get('/ProductBrandList',ProductBrandList)
router.get('/ProductCategoryList',ProductCategoryList)
router.get('/ProductSliderList',ProductSliderList)
router.get('/ProductListByBrand/:BrangID',ProductListByBrang)
router.get('/ProductListByCategory/:CategoryID',ProductListByCategory)
router.get('/ProductListBySimiler/:KeywordID',ProductListBySimiler)
router.get('/ProductListByKeyword/:KeywordID',ProductListByKeyword)
router.get('/ProductListByRemark/:RemarkID',ProductListByRemark)
router.get('/ProductDetails/:ProductID',ProductDetails)
router.get('/ProductReview/:ProductID',ProductReview)

module.exports = router