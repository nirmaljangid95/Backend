import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
    {
        content:{
            type: string,
            require : true,
            
        },
        complit:{
              type : Boolean,
              default: false
        },
        createdBy:{
            type : mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        subTodo:[
            {
                type : mongoose.Schema.Types.ObjectId,
                ref:"Sub_Todo"
            }
        ]

    },{timestamps:true}
)

export const Todo = mongoose.model("Toda",todoSchema)