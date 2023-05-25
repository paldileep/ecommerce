const mongoose = require('mongoose')

const signup_Schema = new mongoose.Schema({ 

    name: { 
      type: String, 
      required: true, 
    }, 
    age: { 
      type: Number, 
      required: true, 
    },
    email: { 
      type: String, 
      required: true, 
    },
    password: { 
      type: String, 
      required: true,
    },
    cart : [ {
        item: {type: mongoose.Schema.Types.ObjectId, ref: 'product'},
        quantity: { type: Number, required:true }
    } ]
     


})

const Signup_model = mongoose.model('user', signup_Schema)

module.exports = Signup_model