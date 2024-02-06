const mongooes = require("mongoose");

//model as a representation of collection

const TaskSchema = new mongooes.Schema({
  name: {
    type:String,
    required:[true,"Name is required"],
    trim:true,
    maxlength:[20,'Name cannot be more than 20']
  },
  completed: {
    type:Boolean,
    default:false,
  },
});

module.exports = mongooes.model("Task", TaskSchema); //name and schema
