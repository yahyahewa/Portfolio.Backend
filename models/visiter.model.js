import {mongoose} from "mongoose";

const visiterSchema=new mongoose.Schema({
    sendAt:{type:Date,default:Date.now},
})

const Visiter = mongoose.model("Visiter",visiterSchema)

export default Visiter