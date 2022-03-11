import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please enter name"]
    },
    email: {
        type: String,
        required: [true, "please enter email"]
    },
    message: {
        type: String,
        required: [true, "please enter message"]
    },
    
})
const message = mongoose.model("message", messageSchema)
export default message