const express = require('express')
const { connect } = require('mongoose');

const app = express()
const task = require('./routes/task')
const connectDB = require('./db/connect');
require('dotenv').config()


app.use(express.json())
app.use('/api/v1/task',task)
const port = 3030;
const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening on port ${port}...`))
    } catch (error){
        console.log(error)
    }
}
start()