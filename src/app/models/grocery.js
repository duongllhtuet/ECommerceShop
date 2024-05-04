const mongoose = require('mongoose')

const grocerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  picture: {
    type: String,
    require: true
  },
  WarrantyPeriod: {
    type: String,
    require: true
  },
  WarrantyType: {
    type: String,
    require: true
  },
  sendFrom: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Grocery', grocerySchema)