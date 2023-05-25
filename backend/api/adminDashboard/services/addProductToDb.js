
const productModel = require('../models/productModel')

const addProductToDb = async (data) => { 

    const{ name, 
          cover, 
        price, 
      short, 
    details, 
  category, 
  color, 
  stock
} = data

    const product = new productModel(
      { name, 
        cover, 
      price, 
    short, 
  details, 
category, 
color, 
stock
}
    )

    try {

      console.log(data)
      const response = await product.save().catch(err=>err)

      return response
      
    } catch (error) {
      return `Error : ${error}`;
    }
}

module.exports = addProductToDb