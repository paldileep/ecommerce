const mongoose = require('mongoose')

const cart_Schema = new mongoose.Schema({ 

   productId : { 
       type : mongoose.Types.ObjectId, 
       required : true 
   }, 
   quantity: { 
     type: Number, 
     required : true 
   }, 
   userId: { 
    type : mongoose.Types.ObjectId, 
    required : true 
   }
})


const CartModel = mongoose.model('cart', cart_Schema)

module.exports = CartModel