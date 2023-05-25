const signupModel = require('../../models/signup_Schema')
const jwt = require('jsonwebtoken')
const ErrorHandler = require('../../middlewares/errorHandler/ErrorHandler')

const login_controller = async (req, res, next) => { 

    const { email , password } = req.body

    console.log(email, password)

    try {
      
        const user = await signupModel.findOne({email, password})
        
        if(user){
          console.log(user)
          const token = jwt.sign({user}, 'secret123')
          console.log(token)
          res.status(200).json({user, token})
        }
        else{ 
          next(new ErrorHandler('No User Found', 404))
        }
       
       
      } catch (error) {
        next(new ErrorHandler(error.message, 400))
      }
    
}

module.exports = login_controller