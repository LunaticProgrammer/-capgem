
const mongoose = require('mongoose')

const walletSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Please provide your username']
  },
  amount : {

    type: Number
  },
  transcations : {

    type : String
  }
})


module.exports = mongoose.model('Wallet', walletSchema)
