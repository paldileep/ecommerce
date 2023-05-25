const mongoose = require('mongoose')

const product = new mongoose.Schema({ 

    name: {
      type: String, 
      required: true
    }, 
    cover: {
      type: String, 
      required: true

    },  
    price: {
      type: String, 
      required: true

    }, 
    short: {
      type: String, 
      required: true

    }, 
    details: {
      type: String, 
      required: true

    }, 
    category: {
      type: String, 
      required: true

    }, 
    date: {
      type: Date, 
      default: new Date()

    }, 
    rating:{
      type: String, 
      required: true,
      default: '0'

    }, 
    color: { 
      type: String, 
    },
    stock: { 
      type: String, 
      required: true 
    }

})


const ProductModel = mongoose.model('product', product)

module.exports = ProductModel