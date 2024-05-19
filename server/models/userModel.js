import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    picture: {
        type: String,
    },
    cartData: [{
        productId: { type: String, required: true },
        quantity: {type: Number, required: true},
        size: { type: String, required: true }
    }]
}, {minimize:false})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;