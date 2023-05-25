const productModel = require('../../adminDashboard/models/productModel')



const getProduct = async (req, res) => { 

      const { productId } = req.query 
      console.log(req.query.productId)
      
      try {

        const response = await productModel.findOne({_id:productId})
        res.status(200).json(response)
        
      } catch (error) {
        res.status(400).json(error)
      }
  

      
}

module.exports = getProduct