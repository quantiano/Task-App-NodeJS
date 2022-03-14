const express = require('express')
require('./db/mongoose') // เรียกใช้ mongoose database connection (connect.inc)
const User = require('./models/user') // เรียกใช้ module User  (User = User2)
const Task1 = require('./models/task') // เรียกใช้ module Task (Task1 = Task)

const app = express()
const port = process.env.PORT || 3000 // heroku setup

app.use(express.json())

app.post('/users', (req, res) => {
    //console.log(req.body)
    const user = new User(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400)
        res.send(error)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((res_user)=>{
        res.status(200).send(res_user)
    }).catch((e) =>{
        res.status(500).send(e)
    })
})

app.get('/users/:uid', (req, res) =>{
    const _id = req.params.uid
    User.findById(_id).then((res_user) =>{
        if(!res_user){
            return res.status(404).send()
        }
        res.send(res_user)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.post('/tasks', (req, res) =>{
    const task = new Task1(req.body)
    task.save().then(() => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/tasks', (req, res) => {
    Task1.find({}).then((res_task) => {
        res.send(res_task)
    }).catch((e) => {
        res.status(500)
    })
})

app.get('/tasks/:tid', (req, res) => {
    const _id = req.params.tid
    Task1.findById(_id).then((res_task) => {
        if(res_task == null){
            return res.status(404).send()
        }
        res.send(res_task)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.listen(port, () => {
    console.log('server listen to port '+port)
})