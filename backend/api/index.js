const express = require('express')
const api = express()
const cors = require('cors')

require('./database/dbconnect')

//error handler import 
const errorHandlerMiddleware = require('./middlewares/errorHandler/errorHandlerMiddleware')

// routes import 
const signup = require('../api/routes/signup/signup_route')
const login = require('../api/routes/login/login_route')
const adminDashboard = require('./adminDashboard/routes/adminDashboard_route')
const product = require('./routes/product/product_route')
const cart = require('./routes/cart/cart_route')

api.use(cors())
api.use(express.json())

api.use('/signup', signup)
api.use('/login', login)
api.use('/products', product)
api.use('/cart', cart)

// for crud products in the website database 
api.use('/admin', adminDashboard)


//error handler 
api.use(errorHandlerMiddleware)

module.exports = api 




