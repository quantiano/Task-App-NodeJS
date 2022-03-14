const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         trim: true,
//         required: true,
//     },
//     completed: {
//         type: Boolean,
//         required: false,
//         default: false
//     }
// })

// const TaskInsert = new Task({
//     description: '    SHOWER  ',
//     completed: true,
// })

// TaskInsert.save().then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.log(error)
// })

// const User = mongoose.model('User' ,{
//     name: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true
//     },
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid!')
//             }
//         }
//     },  
//     age: {
//         type: Number,
//         required: false,
//         default: 0,
//         validate(value){
//             if(value < 0){
//                 throw new Error('Negative is not allowed!')
//             }
//         }
//     },
//     password:{
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('a word password is not allowed to be a part of password')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '   Nitipoom    ',
//     email: 'HELLO@me.com   ',
//     age: 20,
//     password: 'phone333010!@@'
// })

// me.save().then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.log('Error!', error)
// })