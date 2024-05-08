const mongoose = require('mongoose')

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
    purchase: {
        type: Array,
        ref: 'Purchase'
    }
})

module.exports = mongoose.model('User', userSchema)