const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.7lohanj.mongodb.net/?', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connect Successfully!!");
    } catch (error) {
        console.log("Connect Failure!!");
    }

}

module.exports = { connect };