const addProductToDb = require("../services/addProductToDb")



const addProduct = async (req, res) => { 

      const response = await addProductToDb(req.body)

      res.json(response)
}

module.exports = addProduct