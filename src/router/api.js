const express = require('express');
const router = express.Router();

const {ProductCreate,GetAllProduct,ProductSliderList,GetProductSliderList,ProductListByBrand,ProductListByCategory,ProductListBySimiler,ProductListByKeyword,ProductDiscription,GetDiscription,ProductReview} = require('../controller/ProductController')

const {CreateCategory,GetCategoryList} = require('../controller/CategoryController')
const {CreateBrandList,GetAllBrandList} = require('../controller/BrandController')
const {CreateFeatured,GetAllFeaturedList} = require('../controller/FeaturedController')
const {CreateRemark,GetRemarkList} = require('../controller/RemarkController')


const {UserLogin,UserProfile,ReadProfile} = require('../controller/UserController');
const { OtpMatchController,UserLogout} = require('../controller/OtpMatch');
const Authentication = require('../middleware/Authentication');


router.post('/ProductCreate',ProductCreate)
router.get('/GetAllProduct',GetAllProduct)

router.post('/CreateCategory',CreateCategory)
router.get('/GetAllProductCategoryList',GetCategoryList)

router.post('/CreateBrandList',CreateBrandList)
router.get('/GetProductBrandList',GetAllBrandList)

router.post('/ProductDiscription',ProductDiscription)
router.get('/GetAllProductDiscription/:ProductID',GetDiscription)

router.post('/ProductSliderList',ProductSliderList)
router.get('/GetProductSliderList',GetProductSliderList)

router.post('/CreateFeatured',CreateFeatured)
router.get('/GetAllFeaturedList',GetAllFeaturedList)

router.get('/ProductListByCategory/:CategoryID',ProductListByCategory)
router.get('/ProductListByBrand/:BrangID',ProductListByBrand)

router.get('/ProductListByKeyword/:Keyword',ProductListByKeyword)
router.get('/ProductListBySimiler/:CategoryID',ProductListBySimiler)

router.post('/CreateRemark',CreateRemark)
router.get('/GetRemarkList',GetRemarkList)


router.post("/UserLogin",UserLogin)
router.post("/OtpMatch/:email",OtpMatchController)
router.post("/UserLogout",Authentication,UserLogout)


router.post("/CreateUserProfile",Authentication,UserProfile)
router.get("/ReadProfile",ReadProfile)


// router.get('/ProductReview/:ProductID',ProductReview)

module.exports = router