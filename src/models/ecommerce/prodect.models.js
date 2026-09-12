import mongoose from "mongoose"
import { Category } from "./category.models"

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default :0
    },
    stock:{
        default:0,
        type:Number
    },
    image: {
        type:String
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    owner:{
        type: monggose.Schema.Types.ObjectId,
        ref:"User"
    }

}, { timestapms: true })
export const Product = mongoose.model("Product", productSchema)