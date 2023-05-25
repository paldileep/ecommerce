const productModel = require('../../adminDashboard/models/productModel') 

const getProductCategoryWise = async (req, res, next) => { 

  try {

    const { cat } = req.query
   
    const response = await productModel.find({category:cat})

    res.status(200).json(response)
    
  } catch (error) {
    res.status(400).json(error)
  }

}

module.exports = getProductCategoryWise