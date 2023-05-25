
const express = require('express')
const router = express.Router()

const create_cart = require('../../controllers/cart/create_cart')
const verifyAuth = require('../../middlewares/loginAuth/verifyAuth')
const get_cart_items = require('../../controllers/cart/get_cart_items')
const remove_cart_item = require('../../controllers/cart/remove_cart_item')


router.post('/add' ,verifyAuth, create_cart)
router.get('/items', verifyAuth, get_cart_items)
router.delete('/remove', verifyAuth, remove_cart_item)

module.exports = router 