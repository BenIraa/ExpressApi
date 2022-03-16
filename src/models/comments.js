import mongoose from 'mongoose'

const CommentsSchema = new mongoose.Schema({
    comments: {
        type: String,
        require: [true, "Enter Comment"]
    },
 
    
})
const Comments = mongoose.model("Comments", CommentsSchema)

export  default Comments