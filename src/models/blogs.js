import mongoose from 'mongoose'
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: [true, "Please enter title"]
    },
    desc: {
        type: String,
        // required: [true, "Please enter description"]
    },
    picture:
    {
        data: Buffer,
        contentType: String
    }
})
const blogs = mongoose.model("blogs", blogSchema)
export default blogs