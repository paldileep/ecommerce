const jwt = require('jsonwebtoken')
const ErrorHandler = require('../errorHandler/ErrorHandler')

const verifyAuth =  (req, res, next) => { 

    const { token }   = req.headers
         
        // this is working 
        //console.log(token)

        jwt.verify(token, 'secret123', (err, user)=>{
            //console.log(user)

            if(err){
              console.log('verfication failed')
               return next(new ErrorHandler(err.message, 400))
            }

            console.log('verfication sucessful')
            req.body.user = user
            next()


        })

       
        
  
    
   
    

}

module.exports = verifyAuth