const cartModel = require('../../models/cart_Schema')
const userModel = require('../../models/signup_Schema')

const create_cart = async (req, res, next) =>{ 

    const { productId, quantity, user } = req.body

    const udpate = { item: productId, quantity: quantity}

    console.log(udpate)

    try {

      //checking if the item is already in the cart 
      const existed = await userModel.find({email:user.user.email, 'cart.item': productId})

      if(existed.length > 0){
        console.log('phele se hai')

        const response = await userModel.updateOne( {email: user.user.email , 'cart.item': productId },
          { $inc: { 'cart.$.quantity':  quantity } } )

          res.status(200).json(response)
      }
      else{

        const response = await userModel.updateOne( {email:user.user.email} , 
          { $addToSet: { cart:  { item: productId, quantity: quantity }  } 
        })

        res.status(200).json(response)
      }

    } catch (error) {

      next(error)
    }

}


module.exports = create_cart