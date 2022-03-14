const express = require('express')
const router = new express.Router() // สมัคร router
const User = require('../models/user')

router.post('/users', async (req, res) => {
    
    const newuser = new User(req.body)
    
    try {
        await newuser.save()
        res.status(201).send(newuser)
    } catch(e){
        res.status(400).send(e)
    }

    
    // promise
    // user.save().then(()=>{
    //     res.status(201).send(user)
    // }).catch((error) => {
    //     res.status(400)
    //     res.send(error)
    // })
})


// **** READ ****
router.get('/users', async (req, res) => {
    
    try{
        const user = await User.find({}) // await ตัวมันคือ promise
        res.send(user)
    } catch(e){
        res.status(500).send(e)
    }
    
    
    // promise
    // User.find({}).then((res_user)=>{
    //     res.status(200).send(res_user)
    // }).catch((e) =>{
    //     res.status(500).send(e)
    // })
})

router.get('/users/:uid', async (req, res) =>{
    const _id = req.params.uid
    
    try{
        const user = await User.findById(_id) // await ตัวมันคือ promise then

        if(!user){
            return res.status(404).send()
        }

        res.status(201).send(user)
    
    }catch(e){
        res.status(500).send(e)
    }
    
    
    // promise
    // User.findById(_id).then((res_user) =>{
    //     if(!res_user){
    //         return res.status(404).send()
    //     }
    //     res.send(res_user)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})
// **** READ ****


// **** UPDATE ****
router.patch('/users/:uid', async (req, res) => {

    const updates = Object.keys(req.body)
    const allowed_update_policy = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update_check) => {
        return allowed_update_policy.includes(update_check)
    })

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'})
    }

    try{
        const user = await User.findByIdAndUpdate(req.params.uid, req.body, { new: true, runValidators: true })
        
        if(!user){
            return res.status(404).send()
        }

        res.send(user)

    }catch(e){
        res.status(400).send(e)
    }
})


// **** DELETE ****
router.delete('/users/:uid', async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.uid)
        if(!user){
            return res.status(404).send()
        }

        res.send(user)

    }catch(e){
        res.status(500).send()
    }
})

module.exports = router // ส่งออก router