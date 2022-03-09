import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    startedYear: {
        type: String,
        required: [true, "please enter year"]
    },
    endedYear: {
        type: String,
        required: [true, "please enter year"]
    },
    school: {
        type: String,
        required: [true, "please enter school"]
    },
    courses: {
        type: String,
        required: [true, "please enter courses"]
    },
})
const education = mongoose.model("education", educationSchema)
export default education