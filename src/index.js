const express = require('express')
require('./db/mongoose') // เรียกใช้ mongoose database connection (connect.inc)
// const User = require('./models/user') // เรียกใช้ module User  (User = User2)
// const Task1 = require('./models/task') // เรียกใช้ module Task (Task1 = Task)
const { Router } = require('express')
const userRouter = require('./routers/user') // โหลด router ของหมวด users
const taskRouter = require('./routers/task') // โหลด router ของหมวด tasks

const app = express()
const port = process.env.PORT || 3000 // heroku setup

app.use(express.json())
app.use(userRouter) // ใช้งาน router ของ user
app.use(taskRouter) // ใช้งาน router ของ task


app.listen(port, () => {
    console.log('server listen to port '+port)
})