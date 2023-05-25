const express = require('express')
const router = express.Router()

const signup_controller = require('../../controllers/signup/signup_controller')

router.post('/', signup_controller)


module.exports = router