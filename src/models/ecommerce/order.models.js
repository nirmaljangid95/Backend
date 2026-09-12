import mongoose from "mongoose"

const orderItem = new mongoose.Schema({
    productId:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"Product"
    },
   quantity:{
      type:Number,
      required:true
   }
})
const orderSchema = new mongoose.Schema(
    {
     orderPrice:{
        type:Number,
        required:true
     },
     castomer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
     },
     orderItems:{
        type:[orderItem]
     },
     address:{
        type:String,
        required:true
     },
     status:{
        type:String,
        enum:["pandding","cancelled","delieverd"],
        default:"panfing"
     }
    }
,{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)