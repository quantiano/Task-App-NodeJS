const mongoose = require('mongoose')
const validator = require('validator')

const Task2 = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true,
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    }
})

module.exports = Task2