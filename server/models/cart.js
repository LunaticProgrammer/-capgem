
const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Please provide your username']
  },
  items : {
      type : String
  },
  total : {
    type : Number
  }
})


module.exports = mongoose.model('Cart', cartSchema)
