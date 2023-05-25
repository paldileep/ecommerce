const express = require('express')
const router = express.Router()

const addProduct = require('../controllers/addProduct')

router.post('/product', addProduct)



module.exports = router