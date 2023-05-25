const signup_Schema = require('../../models/signup_Schema')

const remove_cart_item = async (req, res, next) => {
  
    const { productId } = req.query
    const { user } = req.body

    console.log(productId)

    try {

      const response = await signup_Schema.updateOne(
          {email:user.user.email},
            { $pull: { cart :  { _id : productId } }  } 
          )

        
          res.status(200).json(response)

      // .update(
      //   {
      //    email: user.user.email
      //   },
      //   {
      //     $pull :{
      //       cart: 
      //     }
      //   }
      
      // )
      
    } catch (error) {
        next(error)
    }
  

}

module.exports =  remove_cart_item