
const userModel = require('../../models/signup_Schema')
const cartModel = require('../../models/cart_Schema')

const get_cart_items = async (req, res, next) =>{ 

    const { user } = req.body

    try {

      const response = await userModel.find({email:user.user.email}).populate('cart.item')

      res.status(200).json(response)

    } catch (error) {

      next(error)
    }

}


module.exports = get_cart_items