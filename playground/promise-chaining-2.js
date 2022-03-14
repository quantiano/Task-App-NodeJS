require('../src/db/mongoose')
const Task2 = require('../src/models/task')

Task2.findByIdAndDelete('622f6ae31c3e5740dcaac192').then((res_task) => {
    console.log(res_task)
    return Task2.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})