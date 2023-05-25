const productModel = require('../../adminDashboard/models/productModel')

const getProduct = async (req, res) => { 

    try {

        const response = await productModel.find()
  
        res.status(200).json(response)
        
      } catch (error) {
        res.status(400).json(error)
      }

}

module.exports = getProduct