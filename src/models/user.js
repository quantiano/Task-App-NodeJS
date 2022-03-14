const mongoose = require('mongoose')
const validator = require('validator')

const User2 = mongoose.model('User' ,{
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid!')
            }
        }
    },  
    age: {
        type: Number,
        required: false,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Negative is not allowed!')
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('a word password is not allowed to be a part of password')
            }
        }
    }
})

module.exports = User2