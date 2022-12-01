const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    ten : {
        type : String,
        required: true
    },
    tuoi : {
        type: String,
        required: true
    },
    gioitinh : {
        type: String,
        required: true
    },
    chandoan : String,
    thoigian: String,
    ketqua: {
        type: String,
        required: true
    }
})

const Userdb = mongoose.model('ds_benhnhan', schema);

module.exports = Userdb;