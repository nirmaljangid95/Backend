import mongoose from "mongoose"

const sub_todo = new mongoose.Schema({
    content :{
        type: String,
        require: true
    },
    complete:{
        type:Boolean,
        default: false
    },
    createdBy:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    
}, { timestamps: true })

export const Sub_todo = mongoose.models("Sub_Todo", sub_todo)