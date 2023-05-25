const express = require('express')
const router = express.Router()

const getProducts = require('../../controllers/product/getProducts')
const getProduct = require('../../controllers/product/getProduct')
const categoryWishProduct = require('../../controllers/product/getProductCategoryWise')

router.get('/all', getProducts)
router.get('/category', categoryWishProduct)
router.get('/product', getProduct)

module.exports = router