const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Purchase', purchaseSchema)