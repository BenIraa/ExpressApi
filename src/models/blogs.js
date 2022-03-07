import mongoose from 'mongoose'
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter title"]
    },
    discription: {
        type: String,
        required: [true, "Please enter description"]
    },
    picture: {
        type: String,
        required: [true, "Please upload"]
    },
})
const blogs = mongoose.model("blog", blogSchema)
export default blogs