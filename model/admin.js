const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        max: 255
    },
    email : {
        type: String,
        required: true,
        max: 255
    },
    password : {
        type: String,
        required: true,
        max: 1024 
    },
    date : {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Admin' ,  adminSchema);