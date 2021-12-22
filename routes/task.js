const express  = require('express')
const router = express.Router()


const {createTask,getAllTask,updateTask,getTask,deleteTask} = require('../controller/task')
router.route('/').get(getAllTask).post(createTask)

router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask)

module.exports = router