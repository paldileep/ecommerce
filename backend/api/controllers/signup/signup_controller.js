const signupModel = require('../../models/signup_Schema')
const jwt = require('jsonwebtoken')

const signup_controller = async (req, res) => { 

    const { name, age, email, password } = req.body

    
          
    try {

      const user = await signupModel.create({ name, age, email, password })

      if(user){

        const token = jwt.sign({user}, 'secret123')
        
        res.status(201).json({message: 'user created succesfully', user, token})

      }
        
      
      
    } catch (error) {
      next(new ErrorHandler(error.message, 400))
    }

}

module.exports = signup_controller