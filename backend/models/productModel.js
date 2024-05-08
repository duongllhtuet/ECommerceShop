const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
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
  description: {
    type: String,
    require: true
  },
  category: {
    type:String, 
    required:true},
  ratings: [{ 
    userId: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true }
}]
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;