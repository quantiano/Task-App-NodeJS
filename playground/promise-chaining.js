require('../src/db/mongoose')
const { update } = require('../src/models/user')
const User2 = require('../src/models/user')
const Task2 = require('../src/models/task')


// User2.findByIdAndUpdate('622f7c46885d613944d2f4a0', { age: 1 }).then((res_user) => { // document (1. เราอัพเดท ละรอ callback ที่ไม่ error)
//     console.log(res_user)
//     return User2.countDocuments({ age: 1}) // count document that age is 1 => result (2. เปลี่ยนทั้งหมดให้ส่งค่า count กลับมาแทน)
// }).then((result) => { // (3. รอ callback จากค่า return แทน เพราะทั้งหมดได้กลายเป็น return ค่ากลับมา)
//     console.log(result)
// }).catch((e) => { // (4. catch ทีเดียว คลุมทั้งหมด)
//     console.log(e)
// })


const updateAgeandCount = async (id, newage) => {
    const user = await User2.findByIdAndUpdate(id, {age : newage})
    const count = await User2.countDocuments({age: newage})
    return count
}

const deleteTaskandCount = async (id) =>{
    const task = await Task2.findByIdAndDelete(id)
    const counttask = await Task2.countDocuments({completed: false})
    return counttask
}

// updateAgeandCount('622f7c46885d613944d2f4a0', 400).then((res_count) => {
//     console.log('there are ',res_count)
// }).catch((e) => {
//     console.log(e)
// })

deleteTaskandCount('622f789755a89d2070a59515').then((res_count2) => {
    console.log('counttask = ',res_count2)
}).catch((e) => {
    console.log(e)
})