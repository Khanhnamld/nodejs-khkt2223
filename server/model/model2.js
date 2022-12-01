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
    ketqua: String
})

const Userdb = mongoose.model('ds_dieutri', schema);

module.exports = Userdb;