
const mongoose = require('mongoose')

const loyaltycardSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Please provide your username']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide your email.']
  },
  Subscription : {
      type : Number,
      required : true
      
  }
})


module.exports = mongoose.model('Loyaltycard', loyaltycardSchema)
