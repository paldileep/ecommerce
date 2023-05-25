

const errorHandlerMiddleware = (err, req, res, next) =>{
      
      console.log(err)

      res.status(err.statusCode).json({
        success: false, 
        message: err.message
      })

}

module.exports = errorHandlerMiddleware