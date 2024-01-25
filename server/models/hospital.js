const mongoose = require('mongoose');


const hospitalSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Mentor Name is required"]
    },
    email: {
        type: String,
        required: [true, "E-mail is mandatory"],
        validate: {
            validator: validateEmail,
            message: "Email must be from @somaiya.edu domain"
        }
    },
    location: {
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        },
    },
    address: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: false,
        default: true
    },

});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
