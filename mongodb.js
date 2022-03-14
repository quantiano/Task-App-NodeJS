const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectId

//const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => { //(connection, config, callback function)
    if(error){
        return console.log('fetal rror')
    }

    const db1 = client.db(databaseName) //database

    const collection_users = db1.collection('users') // database -> collection

    const collection_tasks = db1.collection('tasks') // collection

    //db.createCollection('test')


    // ********************* INSERT *********************
    
    // collection_users.insertOne({ // insert to collection
    //     _id: id,
    //     name: 'ntppmm',
    //     age: 20
    // }, (error, res) =>{ //callback function
    //     if(error){
    //         return console.log('error! insertion failed')
    //     }
    //     console.log(res.insertedId+" "+res.acknowledged)
    // })



    // collection_users.insertMany([{
    //     name: 'user1',
    //     age: 20
    // },{
    //     name: 'user2',
    //     age: 30
    // }], (error, res) => {
    //     if(error){
    //         return console.log('error! insert many failed')
    //     }

    //     console.log(res.insertedIds+" "+res.acknowledged)
    // })



    // collection_tasks.insertMany([{
    //     description: 'CSS325',
    //     completed: false
    // },{
    //     description: 'CSS334',
    //     completed: false
    // }], (error, res) => {
    //     if(error){
    //         return console.log('insert failed!'+error)
    //     }

    //     console.log(res.insertedCount+" "+res.acknowledged)
    // })


    // ********************* READ *********************

    // collection_tasks.findOne({ _id: new ObjectID('622e35831acfea356aa70dcb')}, (error, res) => {
    //     if(error){
    //         return console.log('error')
    //     }

    //     console.log(res)

    // })

    // collection_users.find({ age: 20 }).toArray((error, res) => {
    //     console.log(res)
    // })

    // collection_users.find({ age: 20}).count((error, res_count) => {
    //     console.log(res_count)
    // })

    // collection_tasks.find({ completed: false}).toArray((error, res) => {
    //     console.log(res)
    // })
    
    // ********************* UPDATE *********************

    // collection_users.updateOne({  // updateOne(search, setupdate, promise)
    //     _id: new ObjectID("622e2aa045676e380f021504")
    // },{
    //     $set: {
    //         name: 'BRUH MAN'
    //     },
    //     $inc: {
    //         age: -1
    //     }
    // }).then((res) => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.log(error)
    // }) // catch(callback function)


    
    // collection_tasks.updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((res) => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.log(error)
    // }) 

    // ********************* DELETE *********************

    collection_users.deleteMany({
        age: 20
    }).then((res) => {
        console.log(res)
    }).catch((error) => {
        console.log(error)
    })

    collection_tasks.deleteMany({
        description: 'CSS325'
    }).then((res) => {
        console.log(res)
    }).catch((error) => {
        console.log(error)
    })

})