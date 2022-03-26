import mongoose from 'mongoose'
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter title"]
    },
    desc: {
        type: String,
        required: [true, "Please enter description"]
    },
    picture:
    {
        type: String,
        required: [true, "Please enter image Url"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
    }
})
const blogs = mongoose.model("blogs", blogSchema)
export default blogs