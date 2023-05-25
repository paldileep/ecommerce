const express = require('express')
const router = express.Router()

const login_controller = require('../../controllers/login/login_controller')

router.post('/',  login_controller)


module.exports = router