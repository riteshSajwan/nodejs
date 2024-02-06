const Task  = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper( async(req,res)=>{
    const tasks = await Task.find({}) 
    res.status(200).json({tasks})
})

// const getAllTasks = async(req,res)=>{
//     try{
//         const tasks = await Task.find({}) //filters as per {} and second args to state what all key should be returned
//         res.status(200).json({tasks})
//         // res.status(200).json({tasks,amount:tasks.length,success:true})
//         // res.status(200).json({data:{tasks,nbHits:tasks.length},success:true})
//     }catch(err){
//         res.status(500).json({msg:err,success:false})
//     }
// }

const getTask = asyncWrapper( async(req,res,next) =>{
    const {id:taskID} = req.params; //id as taskID
    try{
        const task = await Task.findOne({_id:taskID}) 
        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`,400))
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }
}
)

// const getTask = asyncWrapper( async(req,res,next) =>{
//     const {id:taskID} = req.params; //id as taskID
//     try{
//         const task = await Task.findOne({_id:taskID}) 
//         if(!task){
//             const error = new Error("Not Found");
//             error.status = 404;
//             return next(error) //to custom error middleware
//             // res.status(404).json({msg: `No task with id : ${taskID}`})
//         }
//         res.status(200).json({task})
//     }catch(err){
//         res.status(500).json({msg:err})
//     }
//     // res.send("GET task")
// }
// )

const createTask =asyncWrapper( async (req,res) =>{
        const task = await Task.create(req.body); //data from postman to schema 
        res.status(200).json({task})
})

const updateTask =asyncWrapper( async(req,res) =>{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,//to return new updated val
            runValidators:true //to fire validation for new data
        })
        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`,404))
            // res.status(404).json({msg: `No task with id : ${taskID}`})
        }
        res.status(200).json({task})
})

const deleteTask =asyncWrapper( async(req,res) =>{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            res.status(404).json({msg: `No task with id : ${taskID}`})
        }
        res.status(200).json({task:null,success:"Task Deleted successfully"})
})

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}