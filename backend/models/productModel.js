import mongoose from "mongoose"

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
  sex: {
    type:String, 
    required:true
  },
  category: {
    type:String, 
    required:true
  },
  selling: {
    type: Number,
    default: 0,
  },
  ratings: [{ 
    userId: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
    date: { type: Date, default: Date.now(), }
  }]
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;