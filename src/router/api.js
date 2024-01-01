const express = require('express');
const router = express.Router();

const {ProductCreate,GetAllProduct,productDelete,ProductSliderList,GetProductSliderList,ProductListByBrand,ProductListByCategory,ProductListBySimiler,ProductListByKeyword,ProductDiscription,GetDiscription,ProductReview} = require('../controller/ProductController')

const {CreateCategory,GetCategoryList} = require('../controller/CategoryController')
const {CreateBrandList,GetAllBrandList} = require('../controller/BrandController')
const {CreateFeatured,GetAllFeaturedList} = require('../controller/FeaturedController')
const {CreateRemark,GetRemarkList} = require('../controller/RemarkController')


const {UserLogin,UserProfile,ReadProfile} = require('../controller/UserController');
const { OtpMatchController,UserLogout} = require('../controller/OtpMatch');
const Authentication = require('../middleware/Authentication');

const {WishList,SaveWishList,RemoveWishList} = require('../controller/WishListController')
const {CartServices,UpdateCartList,SaveCart,RemoveCart} = require("../controller/CartLIstController")

// Product=============================
router.post('/ProductCreate',ProductCreate)
router.get('/GetAllProduct',GetAllProduct)
router.post('/productDelete/:id',productDelete)

router.post('/ProductDiscription',ProductDiscription)
router.get('/GetAllProductDiscription/:ProductID',GetDiscription)

router.post('/ProductSliderList',ProductSliderList)
router.get('/GetProductSliderList',GetProductSliderList)

router.post('/CreateCategory',CreateCategory)
router.get('/GetAllProductCategoryList',GetCategoryList)

router.post('/CreateBrandList',CreateBrandList)
router.get('/GetProductBrandList',GetAllBrandList)

router.post('/CreateFeatured',CreateFeatured)
router.get('/GetAllFeaturedList',GetAllFeaturedList)

router.get('/ProductListByCategory/:CategoryID',ProductListByCategory)
router.get('/ProductListByBrand/:BrangID',ProductListByBrand)

router.get('/ProductListByKeyword/:Keyword',ProductListByKeyword)
router.get('/ProductListBySimiler/:CategoryID',ProductListBySimiler)

router.post('/CreateRemark',CreateRemark)
router.get('/GetRemarkList',GetRemarkList)


//User API===========================
router.post("/UserLogin",UserLogin)
router.post("/OtpMatch/:email",OtpMatchController)
router.post("/UserLogout",Authentication,UserLogout)

router.post("/CreateUserProfile",Authentication,UserProfile)
router.get("/ReadProfile",ReadProfile)


// Wish list =======================
router.get("/WishList",Authentication,WishList)
router.post("/SaveWishList",Authentication,SaveWishList)
router.post("/RemoveWishList",Authentication,RemoveWishList)


// Cart list ======================
router.post("/SaveCart",Authentication,SaveCart)
router.post('/UpdateCartList/:cartID',Authentication,UpdateCartList)
router.get('/CartServices',Authentication,CartServices)
router.post("/RemoveCart",Authentication,RemoveCart)

module.exports = router