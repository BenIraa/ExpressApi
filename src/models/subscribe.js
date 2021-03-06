import mongoose from 'mongoose'

const Subscribechema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, "Enter your email"],
        trim: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    
})
const Subscribe = mongoose.model("Subscribe", Subscribechema)

export  default Subscribe