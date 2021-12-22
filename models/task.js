const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,'must provide name'],
        trim: true,
        maxlength: [20,'name can not be more than 20 characters']
      },
    description: {
        type:String,
        default: false,
  },
    isDone: {
        type:Boolean,
        default: false,
  },
    isActive: {
        type:Boolean,
        default: false,
  },

  },
  {
    timestamps: true,
  }
  );
  
  module.exports = mongoose.model("Task", TaskSchema);
  