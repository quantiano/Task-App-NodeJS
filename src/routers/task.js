const express = require('express')
const router = new express.Router()
const Task1 = require('../models/task')

// **** CREATE ****
router.post('/tasks', async (req, res) =>{
    const newtask = new Task1(req.body)
    
    try{
        const addedtask = await newtask.save()
        res.status(201).send(addedtask)
    }catch(e){
        res.status(500).send(e)
    }
    
    // promise
    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})
// **** CREATE ****

router.get('/tasks', async (req, res) => {
    
    try{
        const task = await Task1.find({})
        res.status(200).send(task)
    } catch(e){
        res.status(500).send(e)
    }

    
    // promise
    // Task1.find({}).then((res_task) => {
    //     res.send(res_task)
    // }).catch((e) => {
    //     res.status(500)
    // })
})

router.get('/tasks/:tid', async (req, res) => {
    const _id = req.params.tid
    
    try{
        const task = await Task1.findById(_id)

        if(!task){
            return res.status(404).send()
        }

        res.status(200).send(task)
    
    }catch(e){
        res.status(500).send(e)
    }
    
    // promise
    // Task1.findById(_id).then((res_task) => {
    //     if(res_task == null){
    //         return res.status(404).send()
    //     }
    //     res.send(res_task)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})


router.patch('/tasks/:tid', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowed_update_policy = ['description', 'completed']
    const isValidOperation = updates.every((update_check) => {
        return allowed_update_policy.includes(update_check)
    })

    if(!isValidOperation){
        return res.status(400).send({error: 'invalid updates!'})
    }

    try {
        const task = await Task1.findByIdAndUpdate(req.params.tid, req.body, { new: true, runValidators: true})

        if(!task){
            res.status(404).send()
        }

        res.send(task)

    }catch(e){
        res.status(500).send(e)
    }

})
// **** UPDATE ****



router.delete('/tasks/:tid', async (req, res) =>{
    try{
        const task = await Task1.findByIdAndDelete(req.params.tid)
        
        if(!task){
            res.status(404).send()
        }

        res.send(task)

    }catch(e){
        res.status(500).send()
    }
})
// **** DELETE ****

module.exports = router