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
    }
})

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;