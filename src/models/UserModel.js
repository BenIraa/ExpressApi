import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstname: {
        type: String, 
        required: [true, "Must enter name"]
    },
    lastname: {
        type: String, 
        required: [true, "Must enter name"]
    },
    email: {
        type: String,
        required: [true, "Must enter email"],
        trim: true,
        unique: true,

    },
    telephone: {
        type: String, 
        required: [true, "Must enter name"]
    },
    password: {
        type: String,
        required: [true, "Enter password"],

    },
    
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
    }
})
const User = mongoose.model("User", userSchema)

export default User 

