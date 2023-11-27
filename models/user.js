const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nomorruangan: {
        type: "String",
        required: [true, 'Silahkan masuk keruangan'],
        unique: true
        
    },
    Meja: {
        type: "String",
        required: true,
        

        
    },
    Kursi: {
        type: "String",
        required: true,
       

        
    },
    Lemari: {
        type: "String",
        required: true,
       

        
    },
    Komputer: {
        type: "String",
        required: true,
       

        
    }
})

module.exports = mongoose.model('user', UserSchema)