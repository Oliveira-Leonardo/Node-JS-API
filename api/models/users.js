'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = Schema({
    nome:{ 
    type: String,
    required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    senha:{
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('users', userSchema)